'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Mic, MicOff, Play, Pause, Download, 
  Trash2, Clock, FileAudio, Volume2, Square 
} from 'lucide-react';

interface VoiceNote {
  id: string;
  title: string;
  duration: number;
  timestamp: Date;
  audioUrl: string;
  transcription?: string;
  category: 'site-report' | 'meeting' | 'reminder' | 'other';
  location?: string;
  tags: string[];
}

interface VoiceNotesProps {
  user: any;
  onNoteCreated?: (note: VoiceNote) => void;
}

export default function VoiceNotes({ user, onNoteCreated }: VoiceNotesProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([]);
  const [playingNote, setPlayingNote] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<VoiceNote['category']>('site-report');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingError, setRecordingError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Load existing voice notes
    loadVoiceNotes();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  const loadVoiceNotes = () => {
    // Mock data for demonstration
    const mockNotes: VoiceNote[] = [
      {
        id: '1',
        title: 'Site Safety Inspection',
        duration: 120,
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        audioUrl: '', // Would be actual audio URL
        transcription: 'Safety inspection completed for East Legon site. All equipment checked and secured. Minor issue with scaffolding on level 3 needs attention.',
        category: 'site-report',
        location: 'East Legon Site',
        tags: ['safety', 'inspection', 'scaffolding']
      },
      {
        id: '2',
        title: 'Client Meeting Notes',
        duration: 300,
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
        audioUrl: '',
        transcription: 'Meeting with Kwame Properties regarding project timeline. Discussed material delivery schedule and budget adjustments.',
        category: 'meeting',
        location: 'Office',
        tags: ['client', 'timeline', 'budget']
      },
      {
        id: '3',
        title: 'Daily Progress Update',
        duration: 90,
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        audioUrl: '',
        category: 'site-report',
        location: 'Kumasi Site',
        tags: ['progress', 'daily-report']
      }
    ];
    setVoiceNotes(mockNotes);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true
        }
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        const newNote: VoiceNote = {
          id: Date.now().toString(),
          title: `${getCategoryLabel(selectedCategory)} - ${new Date().toLocaleDateString()}`,
          duration: recordingTime,
          timestamp: new Date(),
          audioUrl,
          category: selectedCategory,
          location: 'Current Location', // Would use GPS
          tags: []
        };

        setVoiceNotes(prev => [newNote, ...prev]);
        onNoteCreated?.(newNote);

        // Start transcription
        if (recordingTime > 5) { // Only transcribe if longer than 5 seconds
          transcribeAudio(newNote);
        }

        // Cleanup
        stream.getTracks().forEach(track => track.stop());
        setRecordingTime(0);
        setRecordingError(null);
      };

      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);
      setIsPaused(false);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error starting recording:', error);
      setRecordingError('Unable to access microphone. Please check permissions.');
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && 
        (mediaRecorderRef.current.state === 'recording' || mediaRecorderRef.current.state === 'paused')) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const transcribeAudio = async (note: VoiceNote) => {
    setIsTranscribing(true);
    
    // Simulate transcription process
    setTimeout(() => {
      const mockTranscriptions = [
        'Site inspection completed successfully. All safety protocols followed. Materials delivered on schedule.',
        'Meeting with client went well. Discussed project timeline and budget adjustments. Next review scheduled for next week.',
        'Daily progress update: Foundation work 80% complete. Steel work to begin tomorrow. Weather conditions favorable.',
        'Equipment maintenance check completed. All machinery in good working condition. Scheduled next maintenance for next month.'
      ];
      
      const randomTranscription = mockTranscriptions[Math.floor(Math.random() * mockTranscriptions.length)];
      
      setVoiceNotes(prev => 
        prev.map(n => 
          n.id === note.id 
            ? { ...n, transcription: randomTranscription }
            : n
        )
      );
      setIsTranscribing(false);
    }, 3000);
  };

  const playNote = (note: VoiceNote) => {
    if (playingNote === note.id) {
      // Stop current playback
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingNote(null);
    } else {
      // Start new playback
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      // Create new audio element for this note
      const audio = new Audio(note.audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => {
        setPlayingNote(null);
      };
      
      audio.play().then(() => {
        setPlayingNote(note.id);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const deleteNote = (id: string) => {
    setVoiceNotes(prev => prev.filter(note => note.id !== id));
    if (playingNote === id) {
      setPlayingNote(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  const downloadNote = (note: VoiceNote) => {
    const link = document.createElement('a');
    link.href = note.audioUrl;
    link.download = `${note.title.replace(/[^a-z0-9]/gi, '_')}.webm`;
    link.click();
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCategoryLabel = (category: VoiceNote['category']): string => {
    switch (category) {
      case 'site-report': return 'Site Report';
      case 'meeting': return 'Meeting';
      case 'reminder': return 'Reminder';
      default: return 'Other';
    }
  };

  const getCategoryColor = (category: VoiceNote['category']): string => {
    switch (category) {
      case 'site-report': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'meeting': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'reminder': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Voice Notes</h1>
            <p className="opacity-90">Audio recording for site reports and documentation</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">{voiceNotes.length} recordings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Notes Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <FileAudio className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{voiceNotes.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Recordings</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(voiceNotes.reduce((total, note) => total + note.duration, 0) / 60)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {voiceNotes.filter(note => note.transcription).length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Transcribed</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Mic className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {voiceNotes.filter(note => note.category === 'site-report').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Site Reports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recording Error */}
      {recordingError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <MicOff className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-400">Recording Error</h3>
              <p className="text-red-700 dark:text-red-300 text-sm">{recordingError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Recording Controls */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Record New Note</h3>
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as VoiceNote['category'])}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="site-report">Site Report</option>
                <option value="meeting">Meeting</option>
                <option value="reminder">Reminder</option>
                <option value="other">Other</option>
              </select>
              
              {isRecording && (
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="font-mono text-lg">{formatTime(recordingTime)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Mic className="w-5 h-5" />
                <span>Start Recording</span>
              </button>
            ) : (
              <>
                {!isPaused ? (
                  <button
                    onClick={pauseRecording}
                    className="flex items-center space-x-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <Pause className="w-5 h-5" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={resumeRecording}
                    className="flex items-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    <span>Resume</span>
                  </button>
                )}
                
                <button
                  onClick={stopRecording}
                  className="flex items-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Square className="w-5 h-5" />
                  <span>Stop</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Transcription Status */}
      {isTranscribing && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-400">Transcribing Audio</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Converting speech to text...</p>
            </div>
          </div>
        </div>
      )}

      {/* Voice Notes List */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recorded Notes</h3>
        </div>

        {voiceNotes.length > 0 ? (
          <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
            {voiceNotes.map((note) => (
              <div key={note.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{note.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(note.category)}`}>
                        {getCategoryLabel(note.category)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{formatTime(note.duration)}</span>
                      </span>
                      <span>{note.timestamp.toLocaleString()}</span>
                      {note.location && <span>{note.location}</span>}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => playNote(note)}
                      className={`p-2 rounded-lg transition-colors ${
                        playingNote === note.id
                          ? 'bg-red-100 text-red-600 hover:bg-red-200'
                          : 'bg-green-100 text-green-600 hover:bg-green-200'
                      }`}
                    >
                      {playingNote === note.id ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button
                      onClick={() => downloadNote(note)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Download size={16} />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {note.transcription && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Transcription</h5>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {note.transcription}
                    </p>
                  </div>
                )}

                {note.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {note.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <Mic className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No voice notes</h3>
            <p className="text-gray-600 dark:text-gray-400">Start recording to create your first voice note</p>
          </div>
        )}
      </div>
    </div>
  );
}