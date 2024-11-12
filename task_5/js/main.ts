// task_5/js/main.ts

// Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  _majorBrand: "major";  // Branding property to distinguish this type
}

// Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  _minorBrand: "minor";  // Branding property to distinguish this type
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: "major" };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: "minor" };
}

