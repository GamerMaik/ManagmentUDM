import { useState, useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const promedios = [
    {
        anio: 2015,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [60, 55, 70, 75, 68, 60, 74, 76, 78, 65]
    },
    {
        anio: 2016,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [62, 58, 72, 77, 69, 65, 75, 77, 79, 70]
    },
    {
        anio: 2017,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [64, 57, 75, 78, 70, 60, 76, 78, 80, 68]
    },
    {
        anio: 2018,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [65, 59, 77, 79, 72, 65, 77, 79, 81, 83]
    },
    {
        anio: 2019,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [66, 60, 78, 80, 73, 71, 78, 80, 82, 68]
    },
    {
        anio: 2020,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [67, 61, 79, 81, 74, 68, 79, 81, 83, 75]
    },
    {
        anio: 2021,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [68, 62, 80, 82, 75, 65, 80, 82, 84, 70]
    },
    {
        anio: 2022,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [69, 63, 81, 83, 76, 70, 81, 83, 85, 77]
    },
    {
        anio: 2023,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [70, 64, 82, 84, 65, 60, 82, 84, 86, 75]
    },
    {
        anio: 2024,
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        values: [65, 59, 80, 81, 70, 55, 82, 79, 85, 80]
    }
];

const AreaBarChartAprendizaje = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedYear, setSelectedYear] = useState(promedios[0].anio);

  const handleChangeYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const data = promedios.find((p) => p.anio === selectedYear);

  const chartData = data.labels.map((label, index) => ({
    month: label,
    promedio: data.values[index],
    comparativo: 80,
  }));

  const formatTooltipValue = (value) => {
    return `${value}`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Rendimiento Académico</h5>
        <select value={selectedYear} onChange={handleChangeYear}>
          {promedios.map((p) => (
            <option key={p.anio} value={p.anio}>{p.anio}</option>
          ))}
        </select>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={chartData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#475be8" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#475be8" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="comparativo"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="promedio"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.promedio > 80 ? "#4caf50" : "#475be8"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChartAprendizaje;
