import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 0.45s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes sprint-1 {
    0% {
      opacity: 1;
    }
    33%,
    100% {
      opacity: 0;
    }
  }

  #sprint-1 {
    animation-name: sprint-1;
  }

  @keyframes sprint-2 {
    0%,
    33% {
      opacity: 0;
    }
    33%,
    66% {
      opacity: 1;
    }
    66%,
    100% {
      opacity: 0;
    }
  }

  #sprint-2 {
    animation-name: sprint-2;
  }

  @keyframes sprint-3 {
    0%,
    66% {
      opacity: 0;
    }
    66%,
    100% {
      opacity: 1;
    }
  }

  #sprint-3 {
    animation-name: sprint-3;
  }
`;
export const Sprints = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334.5 651.8">
        <g className="shapes">
          <g id="sprint-1">
            <path
              fill="var(--hair)"
              d="M174 575c4 0 6 1 6 6 1 15 3 31 15 43a20 20 0 0 1 3 6c2 6 1 9-5 11-1 1-3 0-4 2h-8c0-2-2-2-4-2-9-1-15-6-19-14l-25-41c-4-8-3-8 2-16 4-6 10-9 12-15l3-2c0 7-2 14 1 21 1 5 4 8 10 8s10-1 13-7Z"
            />
            <path
              fill="var(--shirt)"
              d="M216 248c0 12 2 23 3 35-1 3-4 2-7 2-12 2-24-4-36-4-3 0-6 0-8 2l-15 15c-6 4-9 0-13-4l-2-2c-7-7-13-13-16-22l-1-21c0-13-1-26-6-39l1-3c3-4 2-6-3-9a39 39 0 0 1-9-9c-9-9-9-13-19-7-3-1-2-2-1-4l13-19a14 14 0 0 0 2-4c7-21 26-28 43-37a5 5 0 0 1 2 0 14 14 0 0 0 10 5c2 5 6 7 10 9 7 2 11 10 20 8l11 4c10 3 15 11 18 20 3 8 6 15 6 23-1 10-1 19-3 28-2 11-1 22 0 33Z"
            />
            <path
              fill="var(--pants)"
              d="m153 298 15-15c2-2 5-2 8-2 12 0 24 6 36 4 3 0 6 1 7-2l52 11a124 124 0 0 1-9 19c-7 13-15 24-21 37l-1 1c-5 11-7 12-19 9a32 32 0 0 0-4 0 33 33 0 0 0-3 0l10 24c1 3 0 5-2 8-5 5-11 8-17 11-3-1-1-4-3-5l-27 22h-1l-18 6c-4 0-4-3-4-5l-5-41c-1-9-1-18-9-25-9-9-10-21-12-32a2 2 0 0 1 1-3c3 4 5 9 9 13a40 40 0 0 1 11 16c1 4 5 7 8 10a3 3 0 0 0 5 0c1-1 0-3-1-4l-9-14c3-1 4 2 6 4l11 14c1 2 3 4 6 2 4-3 0-5-1-7a27 27 0 0 0-3-4c-1-1-2-2-1-3h3l9 7c2 2 4 4 6 1 3-2 0-5-2-6l-15-16 1-1 18 8c2 1 4 1 5-1s0-4-1-5a59 59 0 0 0-7-4c-7-4-14-6-20-11-2-2-3-4-2-7s3-1 5-1a18 18 0 0 0 13-5 4 4 0 0 0 1-4 2 2 0 0 0-2-1c-9 5-18-2-27 0-3 0 0-2 0-3Z"
            />
            <path
              fill="var(--flesh)"
              d="M216 248c-1-11-2-22 0-33 2-9 2-18 2-28 3 7 5 15 5 22a10 10 0 0 0 15 9c10-4 18-9 25-17 6-6 7-8 3-15a15 15 0 0 1-2-10c0-4 0-7-3-10a4 4 0 0 1 0-6c2-2 3 0 5 2s4 5 5 9c0 5 3 7 8 3a23 23 0 0 0 8-12 51 51 0 0 1 5-14c1-2 2-5 5-4 3 2 1 4 1 6l-6 15c0 2-1 4 1 6 3-7 8-12 13-16l3-4c1-1 3-2 5 0v4l-12 14c-2 2-4 2-2 5l11-10 3-4c2-1 5-1 6 1 1 1-1 3-2 4-4 4-8 9-13 12-2 1-3 2-2 4s2 0 3-1a58 58 0 0 0 11-6c1-1 3-2 4-1 1 2 0 3-1 4a34 34 0 0 1-11 9 25 25 0 0 0-7 5l-25 26-34 30a24 24 0 0 1-4 3c-8 4-16 6-23-2Z"
            />
            <path
              fill="var(--hair)"
              d="m226 49-28-11-12-2-5-1h-2c-5-1-10-2-15 0a17 17 0 0 0-4 1c-12 10-12 24-13 37-1 9 5 17 1 26 0 2 1 3 3 3 3 0 6-3 10-3 5-3 5-8 3-13-2-7 2-13 8-12 5 1 7 7 6 10 0 4 2 5 3 7h2l7-15c1-2 3-2 5-2 4 0 5-3 6-6 1-7 3-8 9-5l11 6c4-2 7-6 9-10 3-5 1-8-4-10Z"
            />
            <path
              fill="var(--flesh)"
              d="M157 442a4 4 0 0 1 1 1h-1a1 1 0 0 1 0-1Z"
            />
            <path
              fill="var(--hair)"
              d="M245 415c-3 7-3 15 0 22 1 2 3 4 6 4 6 0 13 3 16-5 5-1 7 0 6 5 0 6 2 10 4 15 4 10 8 19 17 25 5 3 9 9 6 15s-9 6-15 5c-17-3-32-10-41-27l-17-28c-5-8-3-9 1-16 4-5 10-8 12-14 1-3 3-2 5-1Z"
            />
            <path
              fill="var(--flesh)"
              d="M317 355a29 29 0 0 0 9-11l8-20v-7c-5-5-10-12-18-12m1 51v-1m-1-50c-4-4-9-3-13-4-11-2-21-6-32-7a124 124 0 0 1-9 19c-7 13-15 24-21 37 12-1 24-3 35-8 2 0 3-2 4 0 2 1 0 3-1 4-10 10-13 23-18 35s-9 24-16 34c-3 7-3 14 0 22 1 2 3 4 6 4 6 0 13 3 16-5a12 12 0 0 1 1-7c5-11 10-23 20-32 7-7 14-14 18-24a1 1 0 0 0 0-1c2-1 3-2 3-4l1-1v-2c4-2 5-6 7-9"
            />
            <path
              fill="var(--flesh)"
              d="m170 332 18 8c2 1 4 1 5-1s0-4-1-5a59 59 0 0 0-7-4c-7-4-14-6-20-11-2-2-3-4-2-7s3-1 5-1a18 18 0 0 0 14-5 4 4 0 0 0 0-4 2 2 0 0 0-2-1c-9 5-18-2-27 0-3 0 0-2 0-3-6 4-9 0-13-4l-2-2c-7-7-13-13-16-22-5-5-6-13-9-19l-3-5a19 19 0 0 0 0 3 19 19 0 0 1 0-3 5 5 0 0 0-2-5c-4-12 5-20 7-31l1-3c3-4 2-6-3-9a39 39 0 0 1-9-9c-9-9-9-13-19-7l-14 26a1 1 0 0 0 0 1l-4 8c-2 8-7 17-3 26 6 10 12 22 20 31 9 10 19 19 30 27 7 5 12 11 13 19 3 4 5 9 9 13a40 40 0 0 1 11 16c1 4 5 7 8 10a3 3 0 0 0 5 0c1-1 0-3-1-4l-9-14c3-1 4 2 6 3l11 15c2 2 3 4 6 2 4-3 1-5-1-7a27 27 0 0 0-3-4c-1-1-2-2-1-3h3l9 7c2 2 4 3 6 1 3-2 0-5-2-6l-15-16"
            />
            <path fill="var(--flesh)" d="M181 91h2" />
            <path
              fill="var(--flesh)"
              d="M199 427c3-7 3-16 6-24-3-1-1-4-3-5l-27 22h-1l-18 6 1 9v7a4 4 0 0 1 1 1h-1a63 63 0 0 1-7 34c-7 12-7 25-3 38 3 13 5 25 3 38 0 7-2 14 1 21 1 5 4 8 10 8s10-1 13-7c-1-13 2-26 4-39v-3l1-4c2-6 5-12 5-18-1-15 4-29 8-43l6-36 1-5M181 91c-1-2-3-3-3-7 1-3-1-9-6-10-6-1-10 5-8 12 2 5 2 10-3 13-4 0-6 3-10 3l-1 9-2 1-4 6a14 14 0 0 0 10 5c2 5 6 7 10 9 7 2 11 10 20 8-1-5 1-7 7-7 2 0 5 1 8-1 4-3 6-8 8-13 2-3 2-7 6-8s5-4 4-7c-1-4-3-9-1-12 4-7 3-15 5-23l-11-6c-6-3-8-2-9 5-1 3-2 6-6 6-2 0-4 0-5 2l-7 15"
            />
          </g>
          <g id="sprint-3">
            <path
              fill="var(--hair)"
              d="M147 568c4 0 6 1 6 6 1 17 4 33 16 47a22 22 0 0 1 4 6c2 6 0 10-6 12-2 0-4 0-4 2h-8c-1-3-3-2-5-2-9-1-17-7-21-15l-26-44c-5-9-4-9 2-18 4-6 11-9 13-16l2-1c1 7-1 15 2 22 1 5 4 8 10 8 7 0 12-1 15-7Z"
            />
            <path
              fill="var(--flesh)"
              d="M115 127c1 12 4 25 2 37-2 11-1 21-1 32-3-8-6-16-7-25a12 12 0 0 0-18-9c-10 6-19 12-27 21-6 8-7 10-2 18a18 18 0 0 1 4 11c-1 4 0 8 4 11a5 5 0 0 1 0 7c-3 2-4 0-6-2-3-2-6-6-6-10-1-6-5-7-9-3-5 4-8 9-9 15a58 58 0 0 1-5 16c-1 2-2 6-6 4-3-1-1-4 0-6l4-18c1-2 2-4-1-7-3 8-8 14-13 20l-4 4c-2 1-3 3-5 1-2-1-1-3 0-5l13-17c1-1 3-2 1-6l-12 13-3 4c-2 1-5 2-7 0-1-1 1-3 2-4 5-6 9-11 15-15 1-1 2-3 1-5s-2 1-4 1a68 68 0 0 0-11 8c-1 1-3 3-4 1v-5a38 38 0 0 1 12-10 29 29 0 0 0 8-7l27-31c11-13 24-24 36-36a27 27 0 0 1 5-4c9-5 17-7 26 1Z"
            />
            <path
              fill="var(--hair)"
              d="M218 15c-10-2-19-7-28-10l-12-3h-5l-3-1c-5-1-9-2-14 0a18 18 0 0 0-4 2c-13 9-13 23-14 36-1 9 5 17 2 26-1 2 1 3 2 4 4 0 7-3 10-4 6-3 5-7 3-13-2-7 2-12 8-11 6 0 7 6 7 10-1 3 2 4 2 6l2 1 7-15c1-2 3-3 5-3 5 0 6-2 6-6 1-6 3-8 9-5l11 7c4-3 8-6 10-11s1-8-4-10Z"
            />
            <path
              fill="var(--flesh)"
              d="M149 408a4 4 0 0 1 0 1 1 1 0 0 1 0-1Z"
            />
            <path fill="var(--flesh)" d="m173 57 1 1" />
            <path
              fill="var(--flesh)"
              d="M173 410c4-9 3-18 7-26-3-1-1-5-3-6-10 8-19 16-30 23l-20 7 2 9v8a4 4 0 0 1 0 1c1 13-2 25-8 37-7 13-8 27-3 41 3 13 5 27 2 41 1 7-1 15 2 22 1 5 4 8 10 8 7 0 12-1 15-7-1-14 2-28 4-42v-3a1 1 0 0 0 0-1l1-4c2-6 5-12 5-18-1-17 5-32 8-47 4-13 5-26 8-38v-5M173 57c-1-2-4-3-3-6 0-4-1-9-7-10s-10 4-8 11c2 6 3 10-3 13-3 1-6 4-10 4l-1 8c-1 0-2 0-2 2-1 1-3 3-3 5a14 14 0 0 0 10 6c2 4 5 6 9 8 7 3 12 10 20 8 0-5 2-7 7-7h8c5-4 6-9 9-14 1-3 2-6 6-7s4-4 3-8-2-8 0-12c4-7 3-15 4-22l-11-7c-6-3-8-1-9 5 0 4-1 6-5 6-2 0-5 1-6 3l-7 15"
            />
            <path
              fill="var(--shirt)"
              d="M179 111a5 5 0 0 1-1-3l-3-2c-8 2-13-5-20-8-4-2-7-4-9-8a14 14 0 0 1-10-6 5 5 0 0 0-2 1c-10 5-20 9-29 16a5 5 0 0 0-3 1l-6 5a5 5 0 0 1-2 3c-26 13-21 48-20 74l7 12a44 44 0 0 1 2 5 11 11 0 0 0 2 0 45 45 0 0 0 8-3 154 154 0 0 1-2 29c-3 17-9 34-6 52 2 10 13 33 27 26 4-1 6-4 9-7l10-10 1-1 25-13v-1l15-4a42 42 0 0 0 9-3 4 4 0 0 0 4-1 11 11 0 0 0-1-16 68 68 0 0 1-3-19c-1-21 5-41 8-61 4-20 5-41-10-58ZM93 186Z"
            />
            <path
              fill="var(--flesh)"
              d="m270 263-45 3a5 5 0 0 1-4-1l-2 1-6 1a5 5 0 0 0 3 0h2l-4 10-3 10a154 154 0 0 0-8 18 5 5 0 0 0 0 3 8 8 0 0 0 0 2c-5 0-7 8-1 10a66 66 0 0 0 35-1c-6 19-6 39-4 59l-1 14a5 5 0 0 0 3 5l1 6a4 4 0 0 0 5 4v1a5 5 0 0 0 3 3v2c2 4 8 5 10 0l1-3a4 4 0 0 0 5-5v-8l4-17 11-49c4-14 7-29 7-44 0-6 0-15-5-19a26 26 0 0 0-7-5Zm-24 64a5 5 0 0 0-1 2l-1 4a84 84 0 0 1 5-16l-3 10Zm22-7v-3a5 5 0 0 0 1 0l-1 3Zm1-45v-1a6 6 0 0 1 1 1 14 14 0 0 0-1 0ZM268 200l10-4c2-1 5-2 4-5-1-4-4-3-7-2l-21 7v-2l15-12c2-1 2-3 1-5s-3-2-5-1a57 57 0 0 0-6 4c-7 4-12 10-19 12h-7c-2-1 0-4 1-6a18 18 0 0 0 2-14 4 4 0 0 0-3-3 2 2 0 0 0-2 2c0 10-10 15-13 24-1 2-2-1-2-1 0 6-5 8-9 9l-4 1c-9 3-17 6-27 4-7 2-14-1-20-1h-6a18 18 0 0 0 3 2 18 18 0 0 1-3-2 5 5 0 0 0-5 0c-13-2-17-14-25-21l-1-1a85 85 0 0 1-19 9c-5 3-11 4-17 6h-1a31 31 0 0 1 2 4c4 7 8 14 14 20a1 1 0 0 0 0 1c1 3 4 5 6 7 6 6 11 14 21 14 13 0 25 1 37-2 14-4 26-9 38-15 8-3 15-6 24-3l15-1a40 40 0 0 1 19-2l13-3a3 3 0 0 0 2-4c0-2-2-2-4-2l-17 2c1-3 4-3 6-3l18-4c3 0 6-1 5-4-1-5-4-3-6-3a27 27 0 0 0-6 2l-3-1c-1-2 1-2 2-3Z"
            />
            <path
              fill="var(--pants)"
              d="M242 271c2-3 1-8-4-8l-50 2a4 4 0 0 0-3-1c-8 1-15 5-23 9l-22 9a282 282 0 0 1-44 12c-3-1-6 0-7 2a5 5 0 0 0 0 6v7a6 6 0 0 1 0 1 102 102 0 0 1 1 17v2a3 3 0 0 0 0 1v4a5 5 0 0 0 1 2l2 28c2 11 7 19 10 28 4 11 2 22 4 33 0 2 3 4 6 3 15-3 27-13 39-21 7-5 13-9 20-11s16-1 22-7c10-9 4-21-2-32a102 102 0 0 0-4-24 5 5 0 0 0-2-3 4 4 0 0 1 1 0 5 5 0 0 0 5 1c2-1 5 1 7 2a16 16 0 0 0 4 0 9 9 0 0 0 9 3 8 8 0 0 0 3-2 6 6 0 0 0 4-3l8-19a4 4 0 0 0 0-2c8-10 12-22 16-34a4 4 0 0 0-1-5Z"
            />
            <path
              fill="var(--hair)"
              d="M230 387c1 8 6 13 13 17 2 2 5 2 7 0 4-3 12-5 10-13 3-4 6-5 8 0 3 5 8 7 12 10 9 5 17 10 28 10 6 0 12 2 14 8 1 7-4 11-9 13-16 8-32 11-49 3l-30-12c-9-4-8-5-9-14 0-6 3-12 1-18-1-3 1-4 4-4Z"
            />
          </g>
          <g id="sprint-2">
            <path
              fill="var(--pants)"
              d="m182 314 7-1c1 5 2 11 5 16a28 28 0 0 1 4 26c-3 9 5 13 5 20 0 1 3 2 4 1 3-5 3 1 5 1-3 11-1 23-3 34l-1 10c-2 11-2 11-13 13-18 0-36 3-53 3-12-2-12-2-12-13 0-24-2-48-11-71-4-10-4-22-3-33 6 5 12 5 20 3 9-3 19-5 29-6h8c4 2 7 0 9-3Z"
            />
            <path fill="var(--shirt)" d="M200 283Z" />
            <path d="M143 81Z" fill="var(--hair)" />
            <path
              fill="var(--hair)"
              d="M221 623c2-2 4-5 3-8s-4-5-7-5c-4 0-7-2-11-4a178 178 0 0 1-26-15c-4-2-7-4-7-9 0-2 0-6-4-3a3 3 0 0 1-1 0c-3 0-3 2-3 4 1 4 0 7-5 9l-1 8c-4 3-9 4-12 10-3 7-12 4-17-5l-3-6h-1c-1-1-3-1-3-3s1-3 3-3a1 1 0 0 1 1-1c-1-1-1-3-3-2a4 4 0 0 0-3 4c0 6-1 11 1 16v10a5 5 0 0 0 2-1 5 5 0 0 1-1 1c1 4-2 8 1 12a3 3 0 0 0 2 3c5 3 11 4 17 5a2 2 0 0 0 3 1h3l8 2 2 1a27 27 0 0 0 11 5l4 1c6 2 12 2 18 1 9-1 17-3 23-8 6-4 8-10 4-14-3-3-1-4 2-6Zm-97-7Zm0 3a2 2 0 0 0 0-1 2 2 0 0 1 0 1Z"
            />
            <path fill="var(--shirt)" d="M214 311ZM215 312Z" />
            <path
              fill="var(--pants)"
              d="M182 314c-2 3-5 5-9 3h-8c6-2 11-3 17-3Z"
            />
            <path
              fill="var(--hair)"
              d="M206 13c-2-4-6-3-10-3-3 1-6 1-9-2h-27c-3 5-8 3-11 4-14 3-22 13-22 27s4 28 8 42a4 4 0 0 0 2 5c3 0 5-1 6-5 7-6 2-13 1-19-1-5-1-9 3-12 6-1 10 2 12 8 2 7 5 7 11 2a15 15 0 0 0 2-3 14 14 0 0 1-1-1l1 1 2-3c1-6 2-11 8-13 3-1 4-5 3-8-1-8 1-10 9-8l7 4 1-2a24 24 0 0 0 3-3c2-4 4-7 1-11Z"
            />
            <path
              d="M127 599c-2-1-4-1-4-3s1-3 3-3v2a6 6 0 0 0 0 1v1Z"
              fill="var(--hair)"
            />
            <path
              fill="var(--pants)"
              d="M126 597v-1h1a8 8 0 0 0 0 1 2 2 0 0 0-1 0Z"
            />
            <path
              fill="var(--pants)"
              d="M126 596a6 6 0 0 1 0-1s0 0 0-1a1 1 0 0 1 0 2Z"
            />
            <path
              fill="var(--shirt)"
              d="M212 291c-5-33-6-67-5-101 1-9 0-18-4-26-2-9-6-16-11-23 0-4-3-8-5-11a36 36 0 0 0-8-12l-2-4c-3 1-3 4-3 6 0 5-2 7-7 4l-8-1c-5-6-12-8-19-11l-8-11c-7 5-9 14-12 22-4 6-5 14-11 19v26a170 170 0 0 1 12 82c-1 10-1 20-4 30-5 13-3 26-1 40 6 5 12 5 20 3 9-3 19-5 29-6 6-2 11-3 17-3l7-1a17 17 0 0 0-5-11c-9-7-14-17-23-25-6-5-10-14-13-23-1-3-4-6-2-10-1 0-2 3-2 0-1-5-2-10 0-15l1-2c-4-2-2-6-3-9-3-7-5-15-5-23-4-1-1-5-2-8a42 42 0 0 1 1-12c11 3 21 1 32 2 2 0 5-1 6 3a6 6 0 0 0 1 0 6 6 0 0 1-1 0v31c0 5 0 9 3 13l7 17c1 3 4 7 3 11 4 0 1 5 4 5l1 3v5c5 3 5 8 6 13 3 0 2 3 2 5 2 0 3 1 2 3l1 2c4 3 3 7 5 11 1 3 1 7 6 8 1-6-1-11-2-16Zm-34-104-1-1 1-1 1 1-1 1Zm9-10a3 3 0 0 0-1-2 3 3 0 0 1 1 2Zm-1 18a89 89 0 0 1 2 13 89 89 0 0 0-2-13Zm6 59a18 18 0 0 0 0-3 18 18 0 0 1 0 3Z"
            />
            <path d="m178 185 1 1-1 1-1-1 1-1Z" fill="var(--shirt)" />
            <path
              fill="var(--flesh)"
              d="m215 312-1-1v-4c-5-1-5-5-6-8-2-4-1-8-5-11l-1-2a2 2 0 0 1-2-2 2 2 0 0 0 2 2c1-2 0-3-2-3 0-2 1-5-2-5l-1 5a3 3 0 0 0-2 1 3 3 0 0 1 2-1l1-5c-1-5-1-10-6-13v-5l-1-3c-3 0 0-5-4-5 1-4-2-8-3-11l-7-17c-3-4-3-8-3-13v-31c-1-4-4-3-6-3-11-1-21 1-32-2a42 42 0 0 0-1 12c1 3-2 7 3 8-1 8 1 16 4 23 1 3-1 7 3 9l-1 2c-2 5-1 10-1 15 1 3 2 0 3 0-2 4 1 7 2 10 3 9 6 18 13 23 9 8 14 18 23 25a17 17 0 0 1 5 11c1 5 2 11 5 16a28 28 0 0 1 4 26c-3 9 5 13 5 20 0 1 3 2 4 1 3-5 3 1 5 1 6 0 5-6 8-9 1 2 0 6 3 6s3-3 3-6l3-12c1-9 2-19-3-27l-11-17ZM133 479a52 52 0 0 0-4 8c-4 8-8 16-8 25l5 46c0 12 3 23 1 35a1 1 0 0 0-1 0v1a1 1 0 0 1 0 2h1a8 8 0 0 0 0 1 2 2 0 0 0-1 0l1 2 3 6c5 9 14 12 17 5 3-6 8-7 12-10l1-8c5-2 6-5 5-9 0-2 0-4 3-4l-1-8v-4c1-13-2-27-1-40v-5c2-2 1-4 2-6 1-10 0-21 6-29 11-17 15-35 21-53-18 0-36 3-53 3 1 15-1 29-9 42Zm-3 126v-3 3Zm34-28a8 8 0 0 0 0 1v1-1a8 8 0 0 1 0-1 10 10 0 0 1 1-2 10 10 0 0 0-1 2Zm5-87-1-4 1 4Zm-2-4a5 5 0 0 0-2-1 5 5 0 0 1 2 1ZM126 596ZM137 86c-2 5-1 11-5 15l8 11c7 3 14 5 19 11l8 1c5 3 7 1 7-4 0-2 0-5 3-6-2-9 4-16 14-15 4 1 10 2 11-3 1-7 7-12 6-20a4 4 0 0 1 1-4c4-3 3-6 0-10-2-3-5-5-5-8 3-9-2-17-3-25l-7-4c-8-2-10 1-9 8 1 3 0 7-3 8-6 3-7 7-8 13l-2 3a14 14 0 0 1-2 3c-6 6-9 5-11-2-2-6-6-9-12-8-4 3-4 7-3 12 1 6 6 13-1 19-1 4-3 5-6 5Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
