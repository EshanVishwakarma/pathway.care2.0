import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, ExternalLink } from 'lucide-react';

interface ResearchUpdate {
  id: string;
  title: string;
  date: string;
  source: string;
  relevance: number;
  summary: string;
  link: string;
}

interface ResearchUpdatesProps {
  updates: ResearchUpdate[];
  medications: any[];
}

export function ResearchUpdates({ updates, medications }: ResearchUpdatesProps) {
  return (
    <div className="space-y-6">
      {updates.map((update, index) => (
        <motion.div
          key={update.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{update.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{update.source}</p>
                  <p className="text-sm text-gray-500">Published: {new Date(update.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900">
                  {update.relevance}% Relevance
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{update.summary}</p>

            <div className="mt-4 flex items-center justify-between">
              <a
                href={update.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700"
              >
                Read Full Article
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}