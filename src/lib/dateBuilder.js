
const createdPush = (creationDate, dateLength) => {
        return "Published " + nth(new Date(creationDate), dateLength);
    },

     updatedPush = (currentDate, creationDate) => {
        return updatedWhen(currentDate, creationDate)
    },

    dTypes = {
        fullDate : {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
        shortDate : {year: 'numeric', month: 'long', day: 'numeric'},
        tinyDate : {year: 'numeric', month: 'short', day: 'numeric'}
    },

    relativeTime = (time) => {
        return (+new Date() - time) / 1000;
    },

    shifter = (d) => {
        if (d > 3 && d < 21) {
                        return 'th';}
        switch (d % 10) {
            case 1:     return "st";
            case 2:     return "nd";
            case 3:     return "rd";
            default:    return "th";}
    },

    nth = (d,l) => {
        let spl = d.toLocaleDateString("en-GB", dTypes[l]).split(" ");
        return spl[1] + " " + spl[0] + shifter(parseInt(spl[0])) + ", " + spl[2];
    },

    time_ago = (time) => {
        let tFormats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'yesterday', 'tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'last week', 'next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'last month', 'next month'],
            [29030400, 'months', 2419200],
            [58060800, 'last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'last century', 'next century'],
            [58060800000, 'centuries', 2903040000]];

        let secs = relativeTime(time);
        if (secs < 120) {
            return 'Just now';
        }

        let i = 0, form;
        while (form = tFormats[i++]) {
            if (secs < form[0]) {
                return typeof form[2] == 'string' ? form[1] : Math.floor(secs / form[2]) + ' ' + form[1] + ' ago';}
        }
    },

    updatedWhen = (currentDate, creationDate) => {
        let dUpdated = new Date(currentDate);
        let dCreated = new Date(creationDate);

        let pushStr = "";
            pushStr += dCreated.getHours() !== dUpdated.getHours() ? "↳ 📑 Updated " :  "📰 ";
            pushStr += time_ago(dUpdated);
            pushStr += 2419200 > relativeTime(dUpdated) ? " at " + new Intl.DateTimeFormat('en-GB', { timeStyle: 'short'}).format(dUpdated) : "";
        return pushStr;
    };

export { createdPush, updatedPush, relativeTime }