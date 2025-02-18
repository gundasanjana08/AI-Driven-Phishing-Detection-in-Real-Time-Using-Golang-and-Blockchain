export interface PhishingAlert {
  id: string;
  url: string;
  timestamp: string;
  riskScore: number;
  status: 'confirmed' | 'investigating' | 'false_positive';
  detectionMethod: 'ai' | 'blockchain' | 'hybrid';
  indicators: string[];
}

export interface Stats {
  totalScanned: number;
  phishingDetected: number;
  falsePositives: number;
  accuracy: number;
}