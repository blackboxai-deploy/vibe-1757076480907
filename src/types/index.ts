export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  bgmiId: string;
  level: number;
  xp: number;
  rank: string;
  kills: number;
  matches: number;
  wins: number;
  winRate: number;
  avgRank: number;
  createdAt: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  captain: string;
  members: string[];
  logo?: string;
  wins: number;
  matches: number;
  rank: number;
  totalKills: number;
  createdAt: string;
}

export interface Tournament {
  id: string;
  title: string;
  description: string;
  banner?: string;
  type: 'solo' | 'duo' | 'squad';
  mode: 'classic' | 'arcade' | 'ranked';
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  prizePool: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  rules: string[];
  matches: Match[];
  registrations: Registration[];
  createdBy: string;
  createdAt: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  round: number;
  matchNumber: number;
  roomId?: string;
  roomPassword?: string;
  participants: string[];
  results: MatchResult[];
  status: 'scheduled' | 'ongoing' | 'completed';
  scheduledAt: string;
  completedAt?: string;
}

export interface MatchResult {
  participantId: string;
  rank: number;
  kills: number;
  damage: number;
  survivalTime: number;
  points: number;
}

export interface Registration {
  id: string;
  tournamentId: string;
  participantId: string;
  participantType: 'user' | 'team';
  registeredAt: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentId?: string;
}

export interface Leaderboard {
  rank: number;
  participantId: string;
  participantName: string;
  participantType: 'user' | 'team';
  totalPoints: number;
  totalKills: number;
  matchesPlayed: number;
  avgRank: number;
  winRate: number;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'tournament' | 'team' | 'match' | 'system';
  read: boolean;
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'tournament' | 'kills' | 'wins' | 'special';
  requirement: number;
  xpReward: number;
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  unlockedAt: string;
}

export interface TournamentStats {
  totalTournaments: number;
  activeTournaments: number;
  totalPlayers: number;
  totalPrizePool: number;
  avgParticipants: number;
}