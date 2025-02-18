import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Activity, Link2, Brain } from 'lucide-react';
import { PhishingAlert, Stats } from '../types';

const mockStats: Stats = {
  totalScanned: 15234,
  phishingDetected: 342,
  falsePositives: 23,
  accuracy: 98.5
};

const mockAlerts: PhishingAlert[] = [
  {
    id: '1',
    url: 'https://testphp.vulnweb.com/',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    riskScore: 0.92,
    status: 'confirmed',
    detectionMethod: 'hybrid',
    indicators: ['Domain age < 24h', 'SSL certificate mismatch', 'Brand impersonation']
  },
  {
    id: '2',
    url: 'https://login-secure.example.net',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    riskScore: 0.78,
    status: 'investigating',
    detectionMethod: 'ai',
    indicators: ['Suspicious form fields', 'Known phishing patterns']
  }
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-400" />
              <h1 className="text-2xl font-bold">PhishGuard AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Activity className="h-5 w-5 text-emerald-400" />
              <span>System Status: Active</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">URLs Scanned</h3>
              <Link2 className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold mt-2">{mockStats.totalScanned.toLocaleString()}</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Threats Detected</h3>
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <p className="text-3xl font-bold mt-2">{mockStats.phishingDetected.toLocaleString()}</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">False Positives</h3>
              <CheckCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold mt-2">{mockStats.falsePositives}</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">AI Accuracy</h3>
              <Brain className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold mt-2">{mockStats.accuracy}%</p>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold mb-6">Recent Alerts</h2>
          <div className="space-y-4">
            {mockAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-red-400">{alert.url}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Detected {new Date(alert.timestamp).toLocaleTimeString()}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {alert.indicators.map((indicator, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                        >
                          {indicator}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${
                        alert.status === 'confirmed' ? 'text-red-400' :
                        alert.status === 'investigating' ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {alert.status.charAt(0).toUpperCase() + alert.status.slice(1).replace('_', ' ')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 mt-1">
                      Risk Score: {(alert.riskScore * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;