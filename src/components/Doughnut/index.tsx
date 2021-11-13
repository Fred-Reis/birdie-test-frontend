import { Container, CenterText } from "./styles";
import { Doughnut } from "react-chartjs-2";
import { lighten } from "polished";
import { useEffect, useState } from "react";

import { EventPropsDTO } from "../../types/eventPropsDTO";
import {
  filterByArgument,
  filterByEvent_types,
} from "../../utils/filterFunctions";

export const DoughnutChart = (props: { events: EventPropsDTO[] }) => {
  const { events } = props;
  const [colorArray, setColorArray] = useState<any[]>([]);

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

  useEffect(() => {
    setColorArray(
      Object.keys(eventsFilteredByTypeObject).map(
        (_el) =>
          "#" +
          (
            "f0000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)
          ).slice(-6)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        backgroundColor: colorArray.map((el) => lighten(0.2, el)),
        borderColor: colorArray.map((el) => lighten(0.15, el)),
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
                size: 20,
              },
            },
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                boxWidth: 10,
                boxHeight: 10,
                font: {
                  size: 12,
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
