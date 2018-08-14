$(() => {
  Scrollbar.initAll();
  let scrollbar = Scrollbar.get($('.akarin-main').get(0));

  scrollbar.addListener((status) => {
    if (status.offset.y === 0)
      $(scrollbar.track.yAxis.element).css('opacity', 0);
    else
      $(scrollbar.track.yAxis.element).css('opacity', 1);
    $('.akarin-main').css("background-position-y", status.offset.y / status.limit.y * 100 + "%");
  });
  $('.nav-item').click((e) => {
    console.log($(e.target));
    $(e.target).find('span').click();
  });
});
