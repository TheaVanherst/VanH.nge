
const createdPush = (creationDate, dateLength) => {
        let createdDay = new Date(creationDate);
        return "Published " + nth(createdDay, dateLength);
    },

     updatedPush = (currentDate, creationDate) => {
        let updatedDay = new Date(currentDate)
        return updatedWhen(updatedDay, creationDate)
    },

    dateTypes = {
        fullDate : {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
        shortDate : {year: 'numeric', month: 'long', day: 'numeric'},
        tinyDate : {year: 'numeric', month: 'short', day: 'numeric'}
    },

    relativeTime = (time) => {
        return (+new Date() - time) / 1000;
    },

    shifter = (d) => {
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }

    },

    nth = (d,l) => {
        let splitter = d.toLocaleDateString("en-GB", dateTypes[l])
            splitter = splitter.split(" ");
        return splitter[1] + " " + splitter[0] + shifter(parseInt(splitter[0])) + ", " + splitter[2];
    },

    time_ago = (time) => {
        let time_formats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'Yesterday', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'Last week', 'Next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'Last month', 'Next month'],
            [29030400, 'months', 2419200],
            [58060800, 'Last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000]];

        let seconds = relativeTime(time);
        if (seconds < 120) {
            return 'Just now';
        }

        let i = 0, format;
        while (format = time_formats[i++]) {
            if (seconds < format[0]) {
                return typeof format[2] == 'string' ? format[1] : Math.floor(seconds / format[2]) + ' ' + format[1] + ' ago';}
        }
    },

    updatedWhen = (currentDate, creationDate) => {
        let createdDay = new Date(creationDate);
        let updatedDay = currentDate;

        let updatedString = "";
            updatedString += createdDay.getHours() !== updatedDay.getHours() ? "↳ 📑 Updated " :  "📰 ";
            updatedString += time_ago(updatedDay);
            updatedString += 2419200 > relativeTime(updatedDay) ? " at " + updatedDay.toLocaleTimeString('en-US') : "";
        return updatedString.toLowerCase();
    };

export {createdPush, updatedPush}