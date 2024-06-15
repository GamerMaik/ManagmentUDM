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
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [2, 4, 1, 3, 2, 1, 0, 1, 3, 4]
      },
      {
        anio: 2016,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [1, 3, 2, 0, 1, 4, 2, 3, 0, 4]
      },
      {
        anio: 2017,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [3, 1, 0, 2, 3, 2, 1, 2, 4, 1]
      },
      {
        anio: 2018,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [0, 2, 1, 3, 1, 0, 3, 2, 4, 3]
      },
      {
        anio: 2019,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [4, 3, 2, 1, 2, 1, 0, 1, 2, 0]
      },
      {
        anio: 2020,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [2, 1, 3, 0, 4, 3, 2, 0, 1, 2]
      },
      {
        anio: 2021,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [1, 0, 2, 4, 2, 1, 3, 1, 3, 0]
      },
      {
        anio: 2022,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [3, 4, 1, 2, 1, 0, 2, 3, 0, 4]
      },
      {
        anio: 2023,
        labels: ["Tecnología", "Ingeniería", "Medicina", "Derecho", "Arquitectura", "Economía", "Ciencias", "Educación", "Administración", "Salud"],
        values: [3, 4, 1, 2, 1, 0, 2, 3, 0, 4]
      }
];

const AreaBarChartPublicaciones = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedYear, setSelectedYear] = useState(promedios[0].anio);

  const handleChangeYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const data = promedios.find((p) => p.anio === selectedYear);

  const chartData = data.labels.map((label, index) => ({
    month: label,
    promedio: data.values[index],
    comparativo: 3,
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
        <h5 className="bar-chart-title">Numero de publicaciones por facultad</h5>
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
                  fill={entry.promedio > 3 ? "#4caf50" : "#475be8"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChartPublicaciones;
