import React from 'react';
import { Download, ExternalLink, BookOpen, FileText } from 'lucide-react';
import { Resource } from '../../types/resources';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ilm-100 text-ilm-800`}>
            {resource.type}
          </span>
        </div>

        <p className="mt-2 text-gray-600">{resource.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-ilm-600 hover:bg-ilm-700">
            {resource.type === 'download' ? (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download
              </>
            ) : (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                View Resource
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}