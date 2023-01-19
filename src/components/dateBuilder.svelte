<script>
    export let createdOn, updatedOn;
    export let dateFormat = "fullDate";

    let dateTypes = {
        fullDate : {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
        shortDate : {year: 'numeric', month: 'long', day: 'numeric'},
        tinyDate : {year: 'numeric', month: 'short', day: 'numeric'}}

    const relativeTime = (time) => {
        return (+new Date() - time) / 1000;}

    const time_ago = (time) => {
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
        if (seconds < 120) {return 'Just now';}

        let i = 0, format;
        while (format = time_formats[i++]) {
            if (seconds < format[0]) {
                return typeof format[2] == 'string' ? format[1] : Math.floor(seconds / format[2]) + ' ' + format[1] + ' ago';}
        }
    }

    let createdDay = new Date(createdOn);
    let updatedDay = new Date(updatedOn)

    // $: updatedWhenLong = () => {
    //     let updatedString = "";
    //         updatedString += createdDay.getHours() !== updatedDay.getHours() ? "↳ 📑 Last updated " : "📰 "
    //         updatedString += time_ago(updatedDay);
    //         updatedString += 2419200 > relativeTime(updatedDay) ? " at " + updatedDay.toLocaleTimeString('en-US') : ""
    //     return updatedString.toLowerCase();}

    $: updatedWhenTiny = () => {
        let updatedString = "";
            updatedString += createdDay.getHours() !== updatedDay.getHours() ? "↳ 📑 Updated " :  "📰 ";
            updatedString += time_ago(updatedDay);
            updatedString += 2419200 > relativeTime(updatedDay) ? " at " + updatedDay.toLocaleTimeString('en-US') : "";
        return updatedString.toLowerCase();}
</script>

<div>
    <p class="createdOn">Posted on {createdDay.toLocaleDateString("en-GB", dateTypes[dateFormat])}</p>
    <p class="updatedOn">{updatedWhenTiny()}</p>
</div>

<style lang="scss">
    div {
        padding:    var(--contentPaddingY) var(--contentPaddingX);
        color:      var(--background);

        &::selection {
            color: 				var(--accent1);
            background-color: 	var(--background)}

        .createdOn {
            font-size:      100%;}
        .updatedOn {
            text-transform: lowercase;
            font-size:      70%;}
    }
</style>