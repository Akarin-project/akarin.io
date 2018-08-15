$(() => {
  let scrollbar = Scrollbar.get($('.akarin-main').get(0));
  let logoAnime = anime.timeline({
    easing: 'easeInOutCubic',
  });
  let openAnime = anime.timeline({
    autoplay: false,
  })
  let fastAnime = anime.timeline({
    autoplay: false,
  })
  let bedrockAnime = anime.timeline({
    autoplay: false,
  })
  let b = [false, false, false]
  let logoCircle = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: false,
    complete: () => {
      let main = $('.akarin-main').get(0);
      Scrollbar.init(main);
      scrollbar = Scrollbar.get(main);
      scrollbar.addListener((status) => {
        if (status.offset.y === 0)
          $(scrollbar.track.yAxis.element).css('opacity', 0);
        else
          $(scrollbar.track.yAxis.element).css('opacity', 1);
        $('.akarin-page').css("background-position-y", status.offset.y / status.limit.y * 100 + "%");
        if (status.offset.y >= $(window).height()) {
          anime({
            targets: ".akarin-header",
            duration: 150,
            translateY: 0,
            easing: "easeOutQuint",
            opacity: 1
          })
        } else {
          anime({
            targets: ".akarin-header",
            duration: 100,
            translateY: "-100%",
            easing: "easeOutQuad",
            opacity: 0,
          })
        }
        if (status.offset.y >= $(window).height() * 0.60 && !b[1]) {
          openAnime.play()
          b[1] = false
        }
        if (status.offset.y >= $(window).height() * 1 && !b[2]) {
          bedrockAnime.play()
          b[2] = false
        }
        if (status.offset.y >= $(window).height() * 1.3 && !b[3]) {
          fastAnime.play()
          b[3] = false
        }
      });
    }
  });
  scrollbar.destroy();
  logoCircle
    .add({
      targets: '#line .border',
      strokeOpacity: [0, 1],
      opacity: [0, 1],
      scale: [0, 1],
      duration: 500
    })
    .add({
      targets: '#line .border-anime',
      opacity: [0, 1],
      r: [128, 192],
      duration: 175,
      easing: 'easeInQuad',
      complete: () => {
        anime({
          targets: '#line .border-anime',
          opacity: [1, 0],
          easing: 'easeOutQuad',
          r: [192, 256],
          duration: 250,
        });
      }
    })
    .add({
      targets: '#line image',
      opacity: [0, 1],
      duration: 300,
    })
    .add({
      targets: '#line .border',
      strokeOpacity: 0,
      duration: 500
    })
    .add({
      targets: '#main-logo',
      width: 256,
      duration: 500,
      begin: () => {
        anime({
          targets: '#line text',
          rotate: 30,
          x: 210,
          y: 100,
          duration: 500,
          opacity: 1,
          delay: 225
        });
      }
    })
    .add({
      targets: '#line g',
      duration: 500,
      translateY: {
        value: 180,
        duration: .1,
      },
      scale: 1,
      begin: () => {
        anime({
          targets: '#line path',
          fillOpacity: 1,
          duration: 500,
        });
        anime({
          targets: "#akarin-desc",
          opacity: [0, 1],
          translateY: ["100%", 0],
          delay: 300,
          duration: 500,
        });
      }
    })
    .add({
      targets: ".akarin-line",
      scale: [0, 1],
      duration: 225
    })
    .add({
      targets: "#page1",
      backgroundColor: "rgba(248, 187, 208, 1)",
      duration: 300
    })
    .add({
      targets: "#page1-footer",
      translateY: "-100%",
      duration: 300
    });
  logoAnime
    .add({
      targets: '#line path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      delay: (el, i) => {
        return i * 125
      }
    })
    .add({
      targets: '#line path',
      fillOpacity: 1,
      strokeOpacity: 0,
      duration: 300
    })
    .add({
      targets: '#line path',
      fillOpacity: 0,
      strokeOpacity: 1,
      strokeDasharray: 5,
      duration: 100,
      delay: 250
    })
    .add({
      targets: '#line path',
      fillOpacity: 1,
      strokeOpacity: 0,
      duration: 100,
      delay: 150
    })
    .add({
      targets: '#line path',
      fillOpacity: 0,
      strokeOpacity: 1,
      strokeDasharray: 5,
      duration: 100,
      delay: 150
    })
    .add({
      targets: '#line path',
      strokeDasharray: 300,
      strokeOpacity: 0,
      duration: 1000,
      delay: 250,
      begin: () => {
        logoCircle.play();
        anime({
          targets: '#line g',
          scale: 0.5,
          duration: 1000,
        });
      }
    });
  openAnime
    .add({
      targets: ".akarin-introduce#open .card-img",
      opacity: [0, 1],
      duration: 400,
      translateY: ["-20%", "0"]
    })
    .add({
      targets: ".akarin-introduce#open .card-body",
      opacity: [0, 1],
      duration: 500,
      translateX: ["20%", "0"]
    })
  bedrockAnime
    .add({
      targets: ".akarin-introduce#bedrock .card-img",
      opacity: [0, 1],
      duration: 400,
      translateY: ["-20%", "0"]
    })
    .add({
      targets: ".akarin-introduce#bedrock .card-body",
      opacity: [0, 1],
      duration: 500,
      translateX: ["20%", "0"]
    })
  fastAnime
    .add({
      targets: ".akarin-introduce#fast .card-img",
      opacity: [0, 1],
      duration: 400,
      translateY: ["-20%", "0"]
    })
    .add({
      targets: ".akarin-introduce#fast .card-body",
      opacity: [0, 1],
      duration: 500,
      translateX: ["20%", "0"]
    })
});
