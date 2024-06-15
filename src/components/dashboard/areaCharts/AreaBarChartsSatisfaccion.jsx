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
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [75, 85, 90, 80, 70, 88, 76, 82]
  },
  {
    anio: 2016,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [78, 87, 92, 83, 73, 90, 78, 85]
  },
  {
    anio: 2017,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [80, 88, 91, 84, 74, 89, 79, 86]
  },
  {
    anio: 2018,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [82, 89, 93, 85, 75, 91, 80, 87]
  },
  {
    anio: 2019,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [83, 90, 94, 86, 76, 92, 81, 88]
  },
  {
    anio: 2020,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [84, 91, 95, 87, 77, 93, 82, 89]
  },
  {
    anio: 2021,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [85, 92, 96, 88, 78, 94, 83, 90]
  },
  {
    anio: 2022,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [86, 93, 97, 89, 79, 95, 84, 91]
  },
  {
    anio: 2023,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [87, 94, 98, 90, 80, 96, 85, 92]
  },
  {
    anio: 2024,
    labels: ['Infraestructura', 'Docencia', 'Servicios', 'Ambiente', 'Administración', 'Biblioteca', 'Cafetería', 'Actividades Extracurriculares'],
    values: [88, 95, 99, 91, 81, 97, 86, 93]
  }
];

const AreaBarChartSatisfaccion = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedYear, setSelectedYear] = useState(promedios[0].anio);

  const handleChangeYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const data = promedios.find((p) => p.anio === selectedYear);

  const chartData = data.labels.map((label, index) => ({
    month: label,
    promedio: data.values[index],
    comparativo: 75,
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
        <h5 className="bar-chart-title">Nivel de Satisfaccion del personal</h5>
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
                  fill={entry.promedio > 75 ? "#4caf50" : "#475be8"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChartSatisfaccion