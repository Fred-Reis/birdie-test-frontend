import { Container, CenterText } from "./styles";
import { Doughnut } from "react-chartjs-2";

import { EventPropsDTO } from "../../types/eventPropsDTO";
import {
  filterByArgument,
  filterByEvent_types,
} from "../../utils/filterFunctions";

const COLOR_ARRAY = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#B34D4D",
  "#809900",
  "#FF1A66",
  "#6666FF",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#6680B3",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
];

const BORDER_ARRAY = COLOR_ARRAY;

export const DoughnutChart = (props: { events: EventPropsDTO[] }) => {
  const { events } = props;

  var reducedEventTypes = filterByArgument([...events], "event_type").reduce(
    function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    },
    []
  );

  var eventsFilteredByTypeObject = filterByEvent_types(
    [...events],
    reducedEventTypes
  );

  var data = {
    labels: Object.keys(eventsFilteredByTypeObject).map((el) =>
      el.replaceAll("_", " ")
    ),
    datasets: [
      {
        title: "any",
        data: Object.values(eventsFilteredByTypeObject).map(
          (el: any) => el.length
        ),
        backgroundColor: COLOR_ARRAY,
        borderColor: BORDER_ARRAY,
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <Container>
      <Doughnut
        height={430}
        width={400}
        data={data}
        options={{
          interaction: {
            mode: "index",
            axis: "x",
          },
          plugins: {
            title: {
              display: true,
              text: "Events by Types",
              font: {
                size: 18,
              },
            },
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                boxWidth: 10,
                boxHeight: 10,
                font: {
                  size: 11,
                },
              },
            },
          },
          layout: {
            padding: 10,
          },

          maintainAspectRatio: false,
        }}
      />

      <CenterText>{Object.keys(eventsFilteredByTypeObject).length}</CenterText>
    </Container>
  );
};
