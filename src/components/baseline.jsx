import React from 'react';
import { render } from 'react-dom';
import { FaCreativeCommons } from 'react-icons/fa';
import { Table, Typography } from 'antd';
import { Carousel } from 'antd';
import {
  FrownOutlined,
  SmileOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Bubble } from '@ant-design/x';
import { Button, Flex, Space, Spin } from 'antd';
import ReactPlayer from 'react-player';
import classNames from 'classnames';

const { Text } = Typography;

const contentStyle = {
  margin: 0,
  height: '500px',
};

const roles = {
  ai: {
    placement: 'start',
    avatar: { src: 'AI.png' },
    typing: { step: 5, interval: 20 },
    style: {
      maxWidth: 600,
      marginInlineEnd: 44,
    },
    styles: {
      footer: {
        width: '100%',
      },
    },
    loadingRender: () => (
      <Space>
        <Spin size="small" />
        Custom loading...
      </Space>
    ),
  },
  user: {
    placement: 'end',
    avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
  },
};

const avtg = [
  {
    start: '0.00 seconds',
    end: '34.01 seconds',
    event: 'baby crying',
    type: 'audio visual',
  },
  {
    start: '0.00 seconds',
    end: '34.01 seconds',
    event: 'baby sobbing',
    type: 'audio visual',
  },
  {
    start: '31.01 seconds',
    end: '34.01 seconds',
    event: 'woman speaking',
    type: 'audio visual',
  },
];

const arig = [
  {
    coordinates: [
      [152, 446],
      [1096, 720],
    ],
    name: 'squirrel',
  },
];

const Example = () => (
  <>
    <Carousel arrows infinite={false} dots={false}>
      <div>
        <Bubble.List
          style={{ maxHeight: 500 }}
          roles={roles}
          items={[
            {
              key: 'ask',
              role: 'user',
              classNames: { content: 'chatbg' },
              content: (
                <>
                  <video
                    controls
                    src="example/mcq.mp4"
                    style={{ height: 240, marginBottom: 10 }}
                  />
                  <div style={{ maxWidth: 600 }}>
                    What is the main sound source of the video? <br /> A. Car
                    horn B. Civil defense alarm C. small bell D. Chimes
                  </div>
                </>
              ),
            },
            {
              key: 'ai',
              role: 'ai',
              classNames: { content: 'chatbg' },
              content: (
                <Text>
                  <blockquote style={{ fontSize: 14 }}>
                    {' '}
                    The video shows a civil defense siren, which is a type of
                    alarm used for emergencies. The siren is clearly visible and
                    is the main source of sound in the video. The other options,
                    such as car horn, small bell, and chimes, are not present in
                    the video. Therefore, the main sound source is the civil
                    defense siren.{' '}
                  </blockquote>{' '}
                  <Text strong>B</Text>{' '}
                </Text>
              ),
            },
          ]}
        />
      </div>
      <div>
        <Bubble.List
          style={{ maxHeight: 500 }}
          roles={roles}
          items={[
            {
              key: 'ask',
              role: 'user',
              classNames: { content: 'chatbg' },
              content: (
                <>
                  <video
                    controls
                    src="example/qa.mp4"
                    style={{ height: 240, marginBottom: 10 }}
                  />
                  <div style={{ maxWidth: 600 }}>
                    {' '}
                    Are there drum and saxophone sound?
                  </div>
                </>
              ),
            },
            {
              key: 'ai',
              role: 'ai',
              classNames: { content: 'chatbg' },
              content: (
                <Text>
                  <blockquote style={{ fontSize: 14 }}>
                    {' '}
                    The saxophone sound is present in the background, and the
                    drum sound is present in the foreground. Both are part of
                    the music being played. The saxophone is a common instrument
                    in jazz music, and the drum is a fundamental component of
                    any rhythm section. The presence of both instruments in the
                    music is evident from the sound.{' '}
                  </blockquote>{' '}
                  <Text strong>yes</Text>{' '}
                </Text>
              ),
            },
          ]}
        />
      </div>
      <div>
        <Bubble.List
          style={{ maxHeight: 500 }}
          roles={roles}
          items={[
            {
              key: 'ask',
              role: 'user',
              classNames: { content: 'chatbg' },
              content: (
                <>
                  <video
                    controls
                    src="example/avtg.mp4"
                    style={{ height: 240, marginBottom: 10 }}
                  />
                  <div style={{ maxWidth: 600 }}>
                    {' '}
                    From the 34.22-second video, 64 frames are sampled at these
                    timestamps: ... . Please describe the events and their time
                    ranges from the video. Output in the following JSON Format:
                    ...
                  </div>
                </>
              ),
            },
            {
              key: 'ai',
              role: 'ai',
              classNames: { content: 'chatbg' },
              content: (
                <Text>
                  <blockquote style={{ fontSize: 14 }}>
                    {' '}
                    The video shows a baby crying and sobbing, with occasional
                    coughing. The baby's distres is evident throughout the
                    video. The woman speaking is also noted, but it is not the
                    main focus of the video. The baby's crying and sobbing are
                    the primary events in the video.{' '}
                  </blockquote>{' '}
                  <Text strong>{JSON.stringify(avtg, null, 2)}</Text>{' '}
                </Text>
              ),
            },
          ]}
        />
      </div>
      <div>
        <Bubble.List
          style={{ maxHeight: 500 }}
          roles={roles}
          items={[
            {
              key: 'ask',
              role: 'user',
              classNames: { content: 'chatbg' },
              content: (
                <>
                  <img
                    src="example/arig.jpg"
                    style={{ height: 240, marginBottom: 10 }}
                  />
                  <audio
                    src="example/arig.wav"
                    controls
                    style={{ marginBottom: 10 }}
                  />
                  <div style={{ maxWidth: 600 }}>
                    {' '}
                    Based on the given image in size of 1280x720 and its
                    corresponding audio, please recognize the category of object
                    making sound in the image, and then find out the bounding
                    box coordinates of the object that makes the sound at the
                    2nd second of the audio.
                  </div>
                </>
              ),
            },
            {
              key: 'ai',
              role: 'ai',
              classNames: { content: 'chatbg' },
              content: (
                <Text>
                  <blockquote style={{ fontSize: 14 }}>
                    {' '}
                    The objects making sound are the two large, round, woven
                    instruments that the man and boy are playing. These
                    instruments are commonly used in Indian music and are known
                    for their distinctive sound and appearance.{' '}
                  </blockquote>{' '}
                  <Text strong>{JSON.stringify(arig, null, 2)}</Text>{' '}
                </Text>
              ),
            },
          ]}
        />
      </div>
      <div>
        <Bubble.List
          style={{ maxHeight: 500 }}
          roles={roles}
          items={[
            {
              key: 'ask',
              role: 'user',
              classNames: { content: 'chatbg' },
              content: (
                <>
                  <video
                    controls
                    src="example/counting.mp4"
                    style={{ height: 240, marginBottom: 10 }}
                  />
                  <div style={{ maxWidth: 600 }}>
                    {' '}
                    Please answer the question 'during the earlier mentioned
                    ball 's first flight , what number of stationary objects are
                    there ?' with a number.
                  </div>
                </>
              ),
            },
            {
              key: 'ai',
              role: 'ai',
              classNames: { content: 'chatbg' },
              content: (
                <Text>
                  <blockquote style={{ fontSize: 14 }}>
                    {' '}
                    The ball is in motion, so it is not considered stationary.
                    The other objects are stationary. Counting the stationary
                    objects: cube, sphere, cylinder, cone, and another cone.
                    Total count is 5.{' '}
                  </blockquote>{' '}
                  <Text strong>5</Text>{' '}
                </Text>
              ),
            },
          ]}
        />
      </div>
    </Carousel>
  </>
);

export default class Baseline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-section">
        <h2 className="uk-text-bold uk-heading-line uk-text-center">
          <span>Baseline: AV-Reasoner</span>
        </h2>
        <h3>
          <span>Comparison with State-of-the-Art MLLMs</span>
        </h3>
        <img src="sota.png" className="uk-align-center" alt="" />
        <h3>
          <span>Comparison with Base Model on Counting Tasks</span>
        </h3>
        <img src="counting.png" className="uk-align-center" alt="" />
        <h3>
          <span>Examples</span>
        </h3>
        <Example />
      </div>
    );
  }
}
