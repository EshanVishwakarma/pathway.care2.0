import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, ExternalLink, Star } from 'lucide-react';

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

export function ResearchUpdates({ updates }: ResearchUpdatesProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Latest Research</h3>
          <p className="text-sm text-gray-500">Personalized to your health profile</p>
        </div>
        <BookOpen className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {updates.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-t border-gray-100 pt-4 first:border-0 first:pt-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-600">
                    {update.relevance}% Relevance
                  </span>
                </div>
                <h4 className="mt-2 text-base font-medium text-gray-900">
                  {update.title}
                </h4>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                  <span>{update.source}</span>
                  <span>•</span>
                  <span>{new Date(update.date).toLocaleDateString()}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{update.summary}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4">
              <a
                href={update.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                Read Full Article
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        View All Research Updates
      </button>
    </div>
  );
}