import React from 'react';
import { render } from 'react-dom';
import { FaCreativeCommons } from 'react-icons/fa';
import { Table, Typography } from 'antd';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
const { Text } = Typography;

const WCSFormula = () => {
  const formula = String.raw`
    \text{WCS} = \frac{1}{K} \sum_{k=1}^{K} 
    \underbrace{
      \frac{1}{|\text{GT}_k|} \sum_{j=1}^{|\text{GT}_k|} \text{IoU}(\text{Pred}_k, \text{GT}_k)
    }_{\text{Localization Accuracy}}
    \cdot 
    \underbrace{
      \max\left\{ 0, 1 - \frac{\big| |\text{Pred}_k| - |\text{GT}_k| \big|}{|\text{GT}_k|} \right\}
    }_{\text{Counting Accuracy Penalty}}
    \cdot 100\%
  `;

  return <BlockMath math={formula} />;
};

const columns = [
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    fixed: 'left',
    width: 160,
    render: (text, record) => (
      <div>
        <Text
          strong={record.strong}
          style={{
            color:
              record.modality == 'A+V'
                ? '#9267CC'
                : record.modality == 'V'
                  ? '#0C6AFF'
                  : undefined,
          }}
        >
          {text}
        </Text>
      </div>
    ),
  },
  {
    title: 'Modality',
    dataIndex: 'modality',
    key: 'modality',
    width: 80,
  },
  {
    title: 'Black-box Evaluation (Long Acc)',
    children: [
      {
        title: 'Acc ↑',
        dataIndex: 'bbLongAcc',
        key: 'bbLongAcc',
        width: 80,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
        defaultSortOrder: 'descend',
      },
      {
        title: 'OBOA ↑',
        dataIndex: 'bbLongOBOA',
        key: 'bbLongOBOA',
        width: 90,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'MAE ↓',
        dataIndex: 'bbLongMAE',
        key: 'bbLongMAE',
        width: 82,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'RMSE ↓',
        dataIndex: 'bbLongRMSE',
        key: 'bbLongRMSE',
        width: 90,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
    ],
  },
  {
    title: 'Black-box Evaluation (Ref Acc)',
    children: [
      {
        title: 'Acc ↑',
        dataIndex: 'bbRefAcc',
        key: 'bbRefAcc',
        width: 80,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'OBOA ↑',
        dataIndex: 'bbRefOBOA',
        key: 'bbRefOBOA',
        width: 90,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'MAE ↓',
        dataIndex: 'bbRefMAE',
        key: 'bbRefMAE',
        width: 82,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'RMSE ↓',
        dataIndex: 'bbRefRMSE',
        key: 'bbRefRMSE',
        width: 90,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
    ],
  },
  {
    title: 'White-box Evaluation',
    children: [
      {
        title: 'WCS ↑',
        dataIndex: 'wcs',
        key: 'wcs',
        width: 82,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
      {
        title: 'IFA ↑',
        dataIndex: 'ifa',
        key: 'ifa',
        width: 80,
        sorter: (a, b) => (a.bbLongAcc ?? 0) - (b.bbLongAcc ?? 0),
      },
    ],
  },
];

const data = [
  {
    key: '1',
    model: 'Random',
    modality: '-',
    bbLongAcc: '1.56',
    bbLongOBOA: '4.97',
    bbLongMAE: '30.35',
    bbLongRMSE: '36.66',
    bbRefAcc: '-',
    bbRefOBOA: '-',
    bbRefMAE: '-',
    bbRefRMSE: '-',
    wcs: '0.08',
    ifa: '100.00',
  },
  {
    key: '2',
    model: 'Human (full-video)',
    modality: 'A+V',
    bbLongAcc: '85.00',
    bbLongOBOA: '96.49',
    bbLongMAE: '0.65',
    bbLongRMSE: '0.95',
    bbRefAcc: '91.53',
    bbRefOBOA: '98.05',
    bbRefMAE: '0.23',
    bbRefRMSE: '0.45',
    wcs: '51.74',
    ifa: '100.00',
  },
  {
    key: '3',
    model: 'GPT-4.1 (text)',
    modality: '-',
    bbLongAcc: '6.04',
    bbLongOBOA: '13.15',
    bbLongMAE: '8.90',
    bbLongRMSE: '17.60',
    bbRefAcc: '-',
    bbRefOBOA: '-',
    bbRefMAE: '-',
    bbRefRMSE: '-',
    wcs: '0.00',
    ifa: '76.24',
  },
  {
    key: '4',
    model: 'GPT-4.1',
    modality: 'V',
    bbLongAcc: '27.17',
    bbLongOBOA: '49.95',
    bbLongMAE: '2.68',
    bbLongRMSE: '4.78',
    bbRefAcc: '27.75',
    bbRefOBOA: '49.07',
    bbRefMAE: '2.48',
    bbRefRMSE: '4.69',
    wcs: '1.14',
    ifa: '98.73',
  },
  {
    key: '5',
    model: 'GPT-4o',
    modality: 'V',
    bbLongAcc: '22.30',
    bbLongOBOA: '45.57',
    bbLongMAE: '3.25',
    bbLongRMSE: '5.82',
    bbRefAcc: '22.59',
    bbRefOBOA: '46.35',
    bbRefMAE: '3.30',
    bbRefRMSE: '5.52',
    wcs: '0.98',
    ifa: '98.73',
  },
  {
    key: '6',
    model: 'Gemini 2.0 Flash',
    modality: 'A+V',
    bbLongAcc: '32.23',
    bbLongOBOA: '57.74',
    bbLongMAE: '2.74',
    bbLongRMSE: '5.97',
    bbRefAcc: '33.01',
    bbRefOBOA: '58.13',
    bbRefMAE: '2.87',
    bbRefRMSE: '5.29',
    wcs: '1.32',
    ifa: '64.65',
  },
  {
    key: '7',
    model: 'Qwen2.5-VL-7B',
    modality: 'V',
    bbLongAcc: '20.84',
    bbLongOBOA: '48.00',
    bbLongMAE: '4.08',
    bbLongRMSE: '7.91',
    bbRefAcc: '22.20',
    bbRefOBOA: '44.79',
    bbRefMAE: '3.51',
    bbRefRMSE: '8.31',
    wcs: '0.24',
    ifa: '55.79',
  },
  {
    key: '8',
    model: 'VideoLLaMA3-7B',
    modality: 'V',
    bbLongAcc: '12.46',
    bbLongOBOA: '30.57',
    bbLongMAE: '4.52',
    bbLongRMSE: '12.60',
    bbRefAcc: '12.66',
    bbRefOBOA: '31.45',
    bbRefMAE: '4.00',
    bbRefRMSE: '6.21',
    wcs: '0.31',
    ifa: '73.71',
  },
  {
    key: '9',
    model: 'InternVL3-8B',
    modality: 'V',
    bbLongAcc: '17.92',
    bbLongOBOA: '43.43',
    bbLongMAE: '3.21',
    bbLongRMSE: '5.55',
    bbRefAcc: '19.08',
    bbRefOBOA: '45.67',
    bbRefMAE: '3.53',
    bbRefRMSE: '7.96',
    wcs: '0.14',
    ifa: '92.11',
  },
  {
    key: '10',
    model: 'Eagle2-9B',
    modality: 'V',
    bbLongAcc: '12.46',
    bbLongOBOA: '34.08',
    bbLongMAE: '3.84',
    bbLongRMSE: '6.33',
    bbRefAcc: '14.51',
    bbRefOBOA: '33.89',
    bbRefMAE: '3.96',
    bbRefRMSE: '6.71',
    wcs: '0.10',
    ifa: '47.13',
  },
  {
    key: '11',
    model: 'UnifiedIO-2 XXL',
    modality: 'A+V',
    bbLongAcc: '10.61',
    bbLongOBOA: '30.48',
    bbLongMAE: '3.99',
    bbLongRMSE: '6.30',
    bbRefAcc: '13.92',
    bbRefOBOA: '35.74',
    bbRefMAE: '3.83',
    bbRefRMSE: '6.98',
    wcs: '0.00',
    ifa: '1.17',
  },
  {
    key: '12',
    model: 'VideoLLaMA2.1-7B-AV',
    modality: 'A+V',
    bbLongAcc: '5.06',
    bbLongOBOA: '13.73',
    bbLongMAE: '5.11',
    bbLongRMSE: '7.34',
    bbRefAcc: '5.65',
    bbRefOBOA: '15.48',
    bbRefMAE: '5.06',
    bbRefRMSE: '7.35',
    wcs: '0.04',
    ifa: '12.27',
  },
  {
    key: '13',
    model: 'Qwen2.5-Omni-7B',
    modality: 'A+V',
    bbLongAcc: '22.30',
    bbLongOBOA: '48.69',
    bbLongMAE: '3.92',
    bbLongRMSE: '8.49',
    bbRefAcc: '23.08',
    bbRefOBOA: '49.76',
    bbRefMAE: '3.03',
    bbRefRMSE: '6.79',
    wcs: '0.12',
    ifa: '95.52',
  },
  {
    key: '14',
    model: 'Ola-7B',
    modality: 'A+V',
    bbLongAcc: '17.92',
    bbLongOBOA: '38.85',
    bbLongMAE: '4.57',
    bbLongRMSE: '10.52',
    bbRefAcc: '16.94',
    bbRefOBOA: '37.10',
    bbRefMAE: '4.54',
    bbRefRMSE: '10.59',
    wcs: '0.12',
    ifa: '75.66',
  },
];

export default class Benchmark extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-section">
        <h2 className="uk-text-bold uk-heading-line uk-text-center">
          <span>Benchmark</span>
        </h2>
        <h3>
          <span>LeaderBoard</span>
        </h3>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          scroll={{ x: 'max-content' }}
          pagination={false}
        />
        <h3>
          <span>Statistics</span>
        </h3>
        <img src="statistic.png" className="uk-align-center" alt="" />
        <p style={{ textAlign: 'justify' }}>
          CG-AV-Counting is based on a subset of 497 videos from CG-Bench. The
          benchmark includes 1,027 multimodal-query questions and 5,845
          fine-grained manually-annotated clue annotations. Nearly 40% of the
          samples require the model to use both audio and visual modalities for
          counting, while others only require the visual modality. This design
          ensures that the benchmark is applicable to both visual models and
          audio-visual models. The benchmark includes object, event, and
          attribute counting target. Among them, attribute counting is more
          challenging because it requires grouping objects with the same
          attribute based on the query.
        </p>
        <p style={{ textAlign: 'justify' }}>
          This benchmark spans a numerical range from 1 to 76, with a long-tail
          distribution, where most counts fall between 1 and 20. Video content
          includes over 10 categories, such as sports, life record, humor,
          tutorials, etc., offering greater domain diversity than existing
          benchmarks. All videos in the benchmark exceed 10 minutes, and
          reference intervals range from seconds to minutes, covering both
          short-term and long-range dependencies.
        </p>
        <h3>
          <span>Comparison</span>
        </h3>
        <img src="compare.png" className="uk-align-center" alt="" />
        <p style={{ textAlign: 'justify' }}>
          To the best of our knowledge, there is currently no comprehensive
          benchmark specifically designed to evaluate MLLMs' video counting
          capabilities. DVD-Counting and VideoNIAH use synthetic data for object
          counting. They have limited counting target variety and do not have
          long videos. Other benchmarks, such as MVBench and WorldSense, include
          real-world videos, but counting is only a subtask of the overall
          evaluation, resulting in a smaller number of samples. Datasets for
          repetitive action counting feature short videos and simple queries,
          making them unsuitable for evaluating MLLMs. Besides, most benchmarks
          only have visual queries, which limits their ability to fully evaluate
          Omni-MLLMs.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Unlike previous counting benchmarks, our benchmark incorporates both
          audio and visual modalities, features more complex queries, and
          provides fine-grained counting clues to jointly evaluate models'
          abilities in both end-to-end and reasoning-based counting.
        </p>
        <h3>
          <span>Evaluation Metrics</span>
        </h3>
        <p>
          We follow CG-Bench's dual evaluation protocol to assess MLLMs'
          counting ability:
        </p>

        <h4>Black-box Evaluation</h4>
        <p>Assesses end-to-end counting under two settings:</p>
        <ul>
          <li>
            <strong>Long Acc:</strong> Model counts and temporally localizes in
            the full video.
          </li>
          <li>
            <strong>Ref Acc:</strong> Model counts in a trimmed reference
            segment, isolating counting from localization.
          </li>
        </ul>

        <p>Counting measured by four metrics:</p>
        <ul>
          <li>
            <strong>Accuracy (Acc):</strong> Exact count prediction rate.
          </li>
          <li>
            <strong>Off-By-One Accuracy (OBOA):</strong> Correct if off by ≤1.
          </li>
          <li>
            <strong>Mean Absolute Error (MAE):</strong> Average counting error
            magnitude.
          </li>
          <li>
            <strong>Root Mean Square Error (RMSE):</strong> Penalizes larger
            errors more.
          </li>
        </ul>

        <h4>White-box Evaluation</h4>
        <p>Assesses localization with explicit evidence:</p>
        <ul>
          <li>
            <strong>Event counting:</strong> Temporal Intersection over Union
            (tIoU) of predicted segments.
          </li>
          <li>
            <strong>Object counting:</strong> Spatial IoU of predicted bounding
            boxes for first object appearances.
          </li>
          <li>
            <strong>Attribute counting:</strong> Clustered bounding boxes
            compared by IoU.
          </li>
        </ul>

        <p>
          <strong>White-box Counting Score (WCS):</strong> Combines localization
          accuracy and counting penalty:
        </p>
        <WCSFormula />
        <p>
          Score ranges 0–100; 100 means perfect count and localization, 0 means
          large count mismatch or format error.
        </p>
        <p>
          <strong>Instruction-Following Accuracy (IFA):</strong> Proportion of
          outputs matching required format, ensuring reliability and
          interpretability.
        </p>
      </div>
    );
  }
}
