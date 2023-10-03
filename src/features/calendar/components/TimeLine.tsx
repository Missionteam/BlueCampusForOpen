"use client";

import { FC, useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import addHours from "date-fns/addHours";
import startOfHour from "date-fns/startOfHour";
import startOfToday from "date-fns/startOfToday";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const eventStyle = (
  event: object,
  start: Date,
  end: Date,
  isSelected: Boolean
) => {
  return {
    className: "",
    style: {
      border: "2px dashed #000",
      backgroundColor: "transparent",
      color: "#000",
    },
  };
};

const TimeLine: FC = () => {
  const [events, setEvents] = useState<Event[]>(() => {
    const events = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const start = addHours(startOfWeek(now), 20 + i * 24); // 20:00スタートの日付を作成
      const end = addHours(start, 2); // スタートから2時間後の日付を作成
      events.push({
        title: "Learn cool stuff",
        start,
        end,
      });
    }
    for (let i = 0; i < 7; i++) {
      const start = addHours(startOfWeek(now), 10 + i * 24); // 20:00スタートの日付を作成
      const end = addHours(start, 2); // スタートから2時間後の日付を作成
      events.push({
        title: "Learn cool stuff",
        start,
        end,
      });
    }
    return events;
  });

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    console.log(data);
  };

  return (
    <DnDCalendar
      defaultView="week"
      events={events}
      localizer={localizer}
      onEventDrop={onEventDrop}
      onEventResize={onEventResize}
      eventPropGetter={(event, start, end, isSelected) =>
        eventStyle(event, start, end, isSelected)
      }
      resizable
      style={{ height: "100%", backgroundColor: "white" }}
    />
  );
};

const locales = {
  "en-US": enUS,
};
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
//@ts-ignore
const DnDCalendar = withDragAndDrop(Calendar);

export default TimeLine;
