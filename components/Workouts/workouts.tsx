import { Workout, TargetArea } from '@/types/types';
import {
  Rest,
  TensAndTwos,
  AgilityCircles,
  SidePlank,
  AlternatingSupermans,
  CurtsyLunges,
  DiagonalLunges,
  BalanceReaches,
  Bicycles,
  Burpees,
  Crunches,
  LateralLunges,
  Lunges,
  ReverseLunges,
  JumpingJacks,
  PushUps,
  Prisoners,
  WormWalkouts,
  Swimmers,
  Surfers,
  Skater,
  Squats,
  Sprints,
  StepUpSquats,
  Plank,
  ToeTouches,
  DoubleCrunches,
  TricepsDips,
  TricepsDipAndReach,
} from '@/components/Workouts';

export const workouts: Array<Workout> = [
  {
    id: 0,
    name: 'Rest',
    duration: 10,
    target: TargetArea.Rest,
    visual: (paused) => <Rest isPaused={paused} />,
  },
  {
    id: 11,
    name: '10s and 2s',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 12,
    name: 'Agility Circles',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <AgilityCircles isPaused={paused} />,
  },
  {
    id: 13,
    name: 'Alternating Supermans',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <AlternatingSupermans isPaused={paused} />,
  },
  {
    id: 14.1,
    name: 'Balance Reaches (Right)',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <BalanceReaches isPaused={paused} direction="rightt" />,
  },
  {
    id: 14.2,
    name: 'Balance Reaches (Left)',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <BalanceReaches isPaused={paused} direction="left" />,
  },
  {
    id: 15,
    name: 'Bicycles',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <Bicycles isPaused={paused} />,
  },
  {
    id: 16,
    name: 'Burpees',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <Burpees isPaused={paused} />,
  },
  {
    id: 17,
    name: 'Cross-Body V-Ups',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 18,
    name: 'Crunches',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <Crunches isPaused={paused} />,
  },
  {
    id: 19,
    name: 'Curtsy Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <CurtsyLunges isPaused={paused} />,
  },
  {
    id: 20,
    name: 'Diagonal Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <DiagonalLunges isPaused={paused} />,
  },
  {
    id: 21,
    name: 'Dive-Bomber Push-Ups',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 22,
    name: 'Double Crunches',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <DoubleCrunches isPaused={paused} />,
  },
  {
    id: 23,
    name: 'Hello Dollies',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 24,
    name: 'Hightail Push-Ups',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 25,
    name: 'Jump Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 26,
    name: 'Jump Squats',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 27,
    name: 'Jumping Jacks',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <JumpingJacks isPaused={paused} />,
  },
  {
    id: 28,
    name: 'Lateral Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <LateralLunges isPaused={paused} />,
  },
  {
    id: 29,
    name: 'Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <Lunges isPaused={paused} />,
  },
  {
    id: 30,
    name: 'Mountain Climbers',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 31,
    name: 'Plank',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <Plank isPaused={paused} />,
  },
  {
    id: 32,
    name: 'Plank to Push-Up',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 33,
    name: 'Primal Step-Ups',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 34,
    name: 'Prisoners',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <Prisoners isPaused={paused} />,
  },
  {
    id: 35,
    name: 'Push-Up and Rotate',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 36,
    name: 'Push-Up Spiders',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 37,
    name: 'Push-Ups',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <PushUps isPaused={paused} />,
  },
  {
    id: 38,
    name: 'Reverse Lunge and Rotate',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 39,
    name: 'Reverse Lunges',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <ReverseLunges isPaused={paused} />,
  },
  {
    id: 40,
    name: 'Shadow Boxing',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <TensAndTwos isPaused={paused} />,
  },
  {
    id: 41.1,
    name: 'Side Plank (Right)',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <SidePlank isPaused={paused} direction="right" />,
  },
  {
    id: 41.2,
    name: 'Side Plank (Left)',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <SidePlank isPaused={paused} direction="left" />,
  },
  {
    id: 42,
    name: 'Skater Plyos',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <Skater isPaused={paused} />,
  },
  {
    id: 43,
    name: 'Sports Sprints',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <Sprints isPaused={paused} />,
  },
  {
    id: 44,
    name: 'Squats',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <Squats isPaused={paused} />,
  },
  {
    id: 45,
    name: 'Step-Up Squats',
    duration: 30,
    target: TargetArea.Lower,
    visual: (paused) => <StepUpSquats isPaused={paused} />,
  },
  {
    id: 46,
    name: 'Surfers',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <Surfers isPaused={paused} />,
  },
  {
    id: 47,
    name: 'Swimmers',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <Swimmers isPaused={paused} />,
  },
  {
    id: 48,
    name: 'Toe Touches',
    duration: 30,
    target: TargetArea.Core,
    visual: (paused) => <ToeTouches isPaused={paused} />,
  },
  {
    id: 49,
    name: 'Triceps Dip and Reach',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TricepsDipAndReach isPaused={paused} />,
  },
  {
    id: 50,
    name: 'Triceps Dips',
    duration: 30,
    target: TargetArea.Upper,
    visual: (paused) => <TricepsDips isPaused={paused} />,
  },
  {
    id: 51,
    name: 'Worm Walkouts',
    duration: 30,
    target: TargetArea.Full,
    visual: (paused) => <WormWalkouts isPaused={paused} />,
  },
];
