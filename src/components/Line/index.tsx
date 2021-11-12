import { Container } from "./styles";
import { Line } from "react-chartjs-2";

import { EventPropsDTO } from "../../types/eventPropsDTO";

import {
  filterByArgument,
  filterByTimestamp,
  sortDateObject,
} from "../../utils/filterFunctions";

export const LineChart = (props: { events: EventPropsDTO[] }) => {
  const { events } = props;
  var filteredDatas = filterByArgument([...events], "timestamp")
    .map((el) =>
      String(new Date(el.substring(0, 10)).toLocaleDateString("en-EN"))
    )
    .reduce(function (a: any, b: any) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);

  var datasUpdated = [...events].map((el) => ({
    ...el,
    timestamp: String(
      new Date(el.timestamp.substring(0, 10)).toLocaleDateString("en-EN")
    ),
  }));

  var datasObjects = filterByTimestamp(datasUpdated, filteredDatas);

  var dateObjSorted = sortDateObject(datasObjects);

  // object to config chart data
  var data = {
    labels: Object.keys(dateObjSorted),
    datasets: [
      {
        label: "Timeline",
        data: Object.values(dateObjSorted).map((el: any) => el.length),
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <Container>
      <Line
        height={140}
        width={820}
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Events by Date",
              font: {
                size: 20,
              },
            },

            legend: {
              position: "top",
              align: "center",
              labels: {
                boxWidth: 10,
                boxHeight: 10,
                font: {
                  size: 12,
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};
