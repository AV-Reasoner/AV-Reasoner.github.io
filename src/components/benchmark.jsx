import React from 'react';
import { render } from 'react-dom';
import { FaCreativeCommons } from 'react-icons/fa';
import { Table, Typography } from 'antd';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
const { Text } = Typography;

const WCSFormula = () => {
  const formula0 = String.raw`
    \text{WCS} = \frac{1}{K} \sum_{k=1}^{K} \sqrt{\text{LA}_k \times \text{CAP}_k} \times 100\%
  `;
  const formula1 = String.raw`
    \text{LA}_k = \frac{1}{|\text{GT}_k|} \sum_{j=1}^{|\text{GT}_k|} \text{IoU}(\text{Pred}_k, \text{GT}_k)
  `;
  const formula2 = String.raw`
    \text{CAP}_k = \max\left\{ 0, 1 - \frac{\left| |\text{Pred}_k| - |\text{GT}_k| \right|}{|\text{GT}_k|} \right\}
  `;

  return (
    <>
      <BlockMath math={formula0} />
      <BlockMath math={formula1} />
      <BlockMath math={formula2} />
    </>
  );
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
        sorter: (a, b) =>
          parseFloat(a.bbLongAcc ?? 0) - parseFloat(b.bbLongAcc ?? 0),
        defaultSortOrder: 'descend',
      },
      {
        title: 'OBOA ↑',
        dataIndex: 'bbLongOBOA',
        key: 'bbLongOBOA',
        width: 90,
        sorter: (a, b) =>
          parseFloat(a.bbLongOBOA ?? 0) - parseFloat(b.bbLongOBOA ?? 0),
      },
      {
        title: 'MAE ↓',
        dataIndex: 'bbLongMAE',
        key: 'bbLongMAE',
        width: 82,
        sorter: (a, b) =>
          parseFloat(a.bbLongMAE ?? 0) - parseFloat(b.bbLongMAE ?? 0),
      },
      {
        title: 'RMSE ↓',
        dataIndex: 'bbLongRMSE',
        key: 'bbLongRMSE',
        width: 90,
        sorter: (a, b) =>
          parseFloat(a.bbLongRMSE ?? 0) - parseFloat(b.bbLongRMSE ?? 0),
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
        sorter: (a, b) =>
          parseFloat(a.bbRefAcc ?? 0) - parseFloat(b.bbRefAcc ?? 0),
      },
      {
        title: 'OBOA ↑',
        dataIndex: 'bbRefOBOA',
        key: 'bbRefOBOA',
        width: 90,
        sorter: (a, b) =>
          parseFloat(a.bbRefOBOA ?? 0) - parseFloat(b.bbRefOBOA ?? 0),
      },
      {
        title: 'MAE ↓',
        dataIndex: 'bbRefMAE',
        key: 'bbRefMAE',
        width: 82,
        sorter: (a, b) =>
          parseFloat(a.bbRefMAE ?? 0) - parseFloat(b.bbRefMAE ?? 0),
      },
      {
        title: 'RMSE ↓',
        dataIndex: 'bbRefRMSE',
        key: 'bbRefRMSE',
        width: 90,
        sorter: (a, b) =>
          parseFloat(a.bbRefRMSE ?? 0) - parseFloat(b.bbRefRMSE ?? 0),
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
        sorter: (a, b) => parseFloat(a.wcs ?? 0) - parseFloat(b.wcs ?? 0),
      },
      {
        title: 'IFA ↑',
        dataIndex: 'ifa',
        key: 'ifa',
        width: 80,
        sorter: (a, b) => parseFloat(a.ifa ?? 0) - parseFloat(b.ifa ?? 0),
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
    wcs: '0.25',
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
    wcs: '71.93',
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
    wcs: '2.38',
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
    wcs: '2.19',
    ifa: '98.73',
  },
  {
    key: '6',
    model: 'SEED-1.5 VL',
    modality: 'V',
    bbLongAcc: '27.85',
    bbLongOBOA: '52.19',
    bbLongMAE: '2.93',
    bbLongRMSE: '6.39',
    bbRefAcc: '28.43',
    bbRefOBOA: '55.11',
    bbRefMAE: '2.70',
    bbRefRMSE: '4.73',
    wcs: '2.06',
    ifa: '99.03',
  },
  {
    key: '7',
    model: 'Gemini 2.5 Flash',
    modality: 'A+V',
    bbLongAcc: '36.90',
    bbLongOBOA: '61.05',
    bbLongMAE: '2.71',
    bbLongRMSE: '6.32',
    bbRefAcc: '37.39',
    bbRefOBOA: '64.07',
    bbRefMAE: '2.45',
    bbRefRMSE: '5.75',
    wcs: '4.20',
    ifa: '95.03',
  },
  {
    key: '8',
    model: 'Gemini 2.5 Pro',
    modality: 'A+V',
    bbLongAcc: '40.80',
    bbLongOBOA: '65.82',
    bbLongMAE: '2.33',
    bbLongRMSE: '7.20',
    bbRefAcc: '41.48',
    bbRefOBOA: '67.96',
    bbRefMAE: '2.01',
    bbRefRMSE: '4.87',
    wcs: '6.35',
    ifa: '95.03',
  },
  {
    key: '9',
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
    wcs: '1.00',
    ifa: '89.14',
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
    wcs: '0.57',
    ifa: '76.14',
  },
  {
    key: '11',
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
    wcs: '0.60',
    ifa: '85.78',
  },
  {
    key: '12',
    model: 'MiniCPM-V 2.6',
    modality: 'V',
    bbLongAcc: '13.83',
    bbLongOBOA: '33.20',
    bbLongMAE: '4.06',
    bbLongRMSE: '6.58',
    bbRefAcc: '14.31',
    bbRefOBOA: '36.22',
    bbRefMAE: '4.04',
    bbRefRMSE: '6.39',
    wcs: '0.43',
    ifa: '61.25',
  },
  {
    key: '13',
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
    wcs: '0.72',
    ifa: '92.11',
  },
  {
    key: '14',
    model: 'InternVideo2.5-8B',
    modality: 'V',
    bbLongAcc: '22.20',
    bbLongOBOA: '48.30',
    bbLongMAE: '3.17',
    bbLongRMSE: '5.92',
    bbRefAcc: '21.71',
    bbRefOBOA: '47.81',
    bbRefMAE: '3.29',
    bbRefRMSE: '6.78',
    wcs: '-',
    ifa: '-',
  },
  {
    key: '15',
    model: 'VideoChat-Flash-7B',
    modality: 'V',
    bbLongAcc: '19.86',
    bbLongOBOA: '43.91',
    bbLongMAE: '3.49',
    bbLongRMSE: '6.17',
    bbRefAcc: '20.45',
    bbRefOBOA: '44.79',
    bbRefMAE: '3.41',
    bbRefRMSE: '5.98',
    wcs: '-',
    ifa: '-',
  },
  {
    key: '16',
    model: 'Eagle2.5-8B',
    modality: 'V',
    bbLongAcc: '28.04',
    bbLongOBOA: '51.80',
    bbLongMAE: '2.76',
    bbLongRMSE: '5.23',
    bbRefAcc: '22.88',
    bbRefOBOA: '46.06',
    bbRefMAE: '3.23',
    bbRefRMSE: '6.63',
    wcs: '1.02',
    ifa: '74.49',
  },
  {
    key: '17',
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
    ifa: '2.24',
  },
  {
    key: '18',
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
    wcs: '0.11',
    ifa: '13.73',
  },
  {
    key: '19',
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
    wcs: '0.41',
    ifa: '95.52',
  },
  {
    key: '20',
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
    wcs: '0.42',
    ifa: '75.66',
  },
  {
    key: '21',
    model: 'AV-Reasoner (Ours)',
    modality: 'A+V',
    bbLongAcc: '22.30',
    bbLongOBOA: '48.30',
    bbLongMAE: '3.15',
    bbLongRMSE: '5.89',
    bbRefAcc: '23.56',
    bbRefOBOA: '48.78',
    bbRefMAE: '3.14',
    bbRefRMSE: '6.12',
    wcs: '0.92',
    ifa: '80.82',
  },
  {
    key: '22',
    model: 'AV-Reasoner-Thinking (Ours)',
    modality: 'A+V',
    bbLongAcc: '21.03',
    bbLongOBOA: '48.78',
    bbLongMAE: '3.26',
    bbLongRMSE: '8.20',
    bbRefAcc: '22.78',
    bbRefOBOA: '48.59',
    bbRefMAE: '3.13',
    bbRefRMSE: '6.69',
    wcs: '1.22',
    ifa: '79.65',
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
