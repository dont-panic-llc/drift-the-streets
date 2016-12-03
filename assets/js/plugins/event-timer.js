$(function() {
  $('.event-timer').countdown(new Date(2017, 5-1, 13, 12, 00, 00), function(event) {
    jQuery(".event-timer__month").html(event.strftime('' + '%m'));
    jQuery(".event-timer__days").html(event.strftime('' + '%n'));
    jQuery(".event-timer__hours").html(event.strftime('' + '%H'));
    jQuery(".event-timer__minutes").html(event.strftime('' + '%M'));
    jQuery(".event-timer__seconds").html(event.strftime('' + '%S'));
  });
});