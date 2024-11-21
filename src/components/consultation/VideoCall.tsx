import React, { useRef, useEffect, useState } from 'react';
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoCallProps {
  roomId: string;
  onEnd: () => void;
  doctorName: string;
  doctorImage: string;
  topics?: string[];
}

export function VideoCall({
  roomId,
  onEnd,
  doctorName,
  doctorImage,
  topics,
}: VideoCallProps) {
  const streamRef = useRef<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showTopics, setShowTopics] = useState(false);

  useEffect(() => {
    const initCall = async () => {
      if (!streamRef.current) {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
          streamRef.current = mediaStream;
          if (localVideoRef.current)
            localVideoRef.current.srcObject = mediaStream;
        } catch (error) {
          console.error('Error accessing media devices:', error);
        }
      }
    };

    initCall();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [roomId]);

  const toggleMedia = (type: 'audio' | 'video') => {
    if (!streamRef.current) return;
    const isAudio = type === 'audio';

    streamRef.current.getTracks().forEach((track) => {
      if (track.kind === type) track.enabled = !track.enabled;
    });

    isAudio ? setIsMuted(!isMuted) : setIsVideoOff(!isVideoOff);
  };

  const controlButton = (
    icon: JSX.Element,
    onClick: () => void,
    isActive = true,
    bgColor = 'bg-gray-700'
  ) => (
    <button
      onClick={onClick}
      className={`p-4 rounded-full ${bgColor} ${
        isActive ? 'hover:bg-gray-600' : ''
      } text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800`}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex flex-col h-full bg-gray-900 relative">
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
          <img
            src={doctorImage}
            alt={doctorName}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-1/3 text-center text-white">
            <h2 className="text-xl font-semibold">{doctorName}</h2>
            <p className="text-gray-300">Connecting...</p>
          </div>
        </div>

        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className={`absolute bottom-4 right-4 w-48 h-36 object-cover rounded-lg border-2 border-white shadow-lg ${
            isVideoOff ? 'hidden' : ''
          }`}
        />

        <AnimatePresence>
          {showTopics && topics && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 top-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs"
            >
              <h3 className="font-medium mb-2">Discussion Topics:</h3>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-gray-800 p-4 flex items-center justify-center space-x-4">
        {controlButton(
          isMuted ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          ),
          () => toggleMedia('audio')
        )}
        {controlButton(
          isVideoOff ? (
            <CameraOff className="h-6 w-6" />
          ) : (
            <Camera className="h-6 w-6" />
          ),
          () => toggleMedia('video')
        )}
        {controlButton(<MessageSquare className="h-6 w-6" />, () =>
          setShowTopics(!showTopics)
        )}
        {controlButton(
          <PhoneOff className="h-6 w-6" />,
          onEnd,
          true,
          'bg-red-600 hover:bg-red-700'
        )}
      </div>
    </div>
  );
}
