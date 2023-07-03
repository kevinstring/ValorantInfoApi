export interface Root {
    status: number
    data: datos[]
  }
  
  export interface datos {
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags?: string[]
    displayIcon: string
    displayIconSmall: string
    bustPortrait?: string
    fullPortrait?: string
    fullPortraitV2?: string
    killfeedPortrait: string
    background?: string
    backgroundGradientColors: string[]
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role?: Role
    abilities: Ability[]
    voiceLine: VoiceLine
  }
  
  export interface Role {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    assetPath: string
  }
  
  export interface Ability {
    slot: string
    displayName: string
    description: string
    displayIcon?: string
  }
  
  export interface VoiceLine {
    minDuration: number
    maxDuration: number
    mediaList: MediaList[]
  }
  
  export interface MediaList {
    id: number
    wwise: string
    wave: string
  }


  export interface Welcome {
    status: number;
    data:   Datum[];
}

export interface Datum {
    uuid:         string;
    displayName:  string;
    coordinates:  null | string;
    displayIcon:  null | string;
    listViewIcon: string;
    splash:       string;
    assetPath:    string;
    mapUrl:       string;
    xMultiplier:  number;
    yMultiplier:  number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts:     Callout[] | null;
}

export interface Callout {
    regionName:      string;
    superRegionName: SuperRegionName;
    location:        Location;
}

export interface Location {
    x: number;
    y: number;
}

export enum SuperRegionName {
    A = "A",
    AttackerSide = "Attacker Side",
    B = "B",
    C = "C",
    DefenderSide = "Defender Side",
    Mid = "Mid",
}
  