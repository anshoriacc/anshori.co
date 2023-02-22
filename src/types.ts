export interface HomeProps {
  currentlyPlayingData: CurrentlyPlayingProps;
}

export interface AboutProps {
  experiences: Experience[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface CurrentlyPlayingProps {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  year: string;
  url: string;
  repositoryUrl: string;
}

export interface Experience {
  role: string;
  status: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}
