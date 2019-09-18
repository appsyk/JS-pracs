var CardFlip = function () {
                    self.isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod');
                    self.isAndroid = navigator.userAgent.match('Android');
                    if (self.isiOS) {
                        this.frontButton = $(".flip-card-front");
                        this.backButton = $(".backFlipArea");
                    }
                    else {
                        this.frontButton = $(".flip-card-front");
                        this.backButton = $(".card-reverse");
                    }
                    
                    this.frontButton.click(function () {
                        var thisCard = $(this).parent();

                        if (self.isiOS) {
                            $(thisCard).css('transform', 'rotateY(180deg)');
                            $(this).children().hide();
                        }
                        else {
                            $(thisCard).css({ 'transform': 'rotateY(180deg)', 'transition': 'all 0.5s ease' });
                        }

                    });

                    this.backButton.click(function () {

                        var thisBackCard = $(this).parent().parent().parent();

                        if (self.isiOS) {
                            $(thisBackCard).css('transform', 'rotateY(0deg)');
                            $(thisBackCard.children()[0]).children().show();
                        }
                        else {
                            $(thisBackCard).children().css('transform', 'rotateY(0deg)');
                        }
                    });
                }