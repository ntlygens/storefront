import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  template: `
        <div class='jumbotron jumbotron-fluid'>
          <div class='container'>

              <div class='card mb-5 col-md-12 text-center border-0'>
                <div class='card-block'>
                  <h2 class='display-3 inset-text font-weight-bold text-uppercase'>Social Media</h2>
                  <h4 class='card-title'>To the Best in Hip-Hop, R&B, Soca, Reggae and more</h4>
                </div>
              </div>

              <div class='card-columns'>

                <div class='card fb text-right mb-3 media-card'>
                  <img class='float-md-left img-rounded col-md-4 mx-auto d-block align-content-around' src='../../assets/icons/socialmedia/facebook_clr.gif' alt='Facebook image'>
                  <div class='card-block'>
                    <h2 class='card-title'>Facebook</h2>
                    <h4 class='card-title'>@smashradio1fm</h4>
                  </div>
                  <div class='card-footer text-muted'>
                    <a href='#' class='btn btn-primary' (click)='getSocialMedia()'>Go somewhere</a>
                  </div>
                </div>

                <div class='card ig text-right mb-3 media-card'>
                  <img class='float-md-left img-rounded col-md-4 mx-auto d-block align-content-around' src='../../assets/icons/socialmedia/instagram_clr.gif' alt='Facebook image'>
                  <div class='card-block'>
                    <h2 class='card-title'>Instagram</h2>
                    <h4 class='card-title'>@smashradio1fm</h4>
                  </div>
                  <div class='card-footer text-muted'>
                    <a href='#' class='btn btn-primary' (click)='getSocialMedia()'>Go somewhere</a>
                  </div>
                </div>

                <div class='card tw text-right mb-3 media-card'>
                  <img class='float-md-left img-rounded col-md-4 mx-auto d-block align-content-around' src='../../assets/icons/socialmedia/twitter_clr.gif' alt='Facebook image'>
                  <div class='card-block'>
                    <h2 class='card-title'>Twitter</h2>
                    <h4 class='card-title'>@smashradio1fm</h4>
                  </div>
                  <div class='card-footer text-muted'>
                    <a href='#' class='btn btn-primary' (click)='getSocialMedia()'>Go somewhere</a>
                  </div>
                </div>

                <div class='card yt text-right mb-3 media-card'>
                  <img class='float-md-left img-rounded col-md-4 mx-auto d-block align-content-around' src='../../assets/icons/socialmedia/youtube_clr.gif' alt='Facebook image'>
                  <div class='card-block'>
                    <h2 class='card-title'>Youtube</h2>
                    <h4 class='card-title'>@smashradio1fm</h4>
                  </div>
                  <div class='card-footer text-muted'>
                    <a href='#' class='btn btn-primary' (click)='getSocialMedia()'>Go somewhere</a>
                  </div>
                </div>


              </div>



          </div>
        </div>

  `,
  styles: [`
      .jumbotron {


        /*background-image: url('../../assets/bckgrnd/panel-3.jpg');*/
        background-color: rgb(255, 255, 255);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        margin-bottom: 0;

      }

      .card-columns {
        columns: 2;
      }

      h2.card-title  {
        margin-bottom: 0;
      }

      h4.card-title  {
        font-variant: small-caps;
      }

      .display-4 {
        color: #E04946;
      }

      .display-3 {
        color: #4e555a;
      }

      .card {
        background-color: rgba(255, 255, 255, 0.7);
      }

      .media-card {
        padding: 2rem 1rem 1rem;

      }

      .media-card .card-block {
        padding-top: 0;
        padding-bottom: 8rem;
      }

      .media-card .card-footer {
        background-color: transparent;
        border: 0;
      }

      .inset-text {
          /* Shadows are visible under slightly transparent text color */
          color: rgba(10,60,150, 0.8);
          text-shadow: 1px 4px 6px #def, 0 0 0 #000, 1px 4px 6px #def;
      }

      /* Don't show shadows when selecting text */
      ::-moz-selection { background: #5af; color: #fff; text-shadow: none; }
      ::selection { background: #5af; color: #fff; text-shadow: none; }

      .fb {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#385e92+0,a9e4f7+100 */
        background: #385e92; /* Old browsers */
        background: -moz-linear-gradient(-45deg, #385e92 0%, #a9e4f7 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #385e92 0%,#a9e4f7 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #385e92 0%,#a9e4f7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#385e92', endColorstr='#a9e4f7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      }
      .ig {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#effcae+0,f88e11+100 */
        background: #effcae; /* Old browsers */
        background: -moz-linear-gradient(-45deg, #effcae 0%, #f88e11 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #effcae 0%,#f88e11 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #effcae 0%,#f88e11 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#effcae', endColorstr='#f88e11',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      }
      .tw {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e2fbff+0,55acef+100 */
        background: #e2fbff; /* Old browsers */
        background: -moz-linear-gradient(45deg, #e2fbff 0%, #55acef 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #e2fbff 0%,#55acef 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #e2fbff 0%,#55acef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2fbff', endColorstr='#55acef',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      }
      .yt {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e62d28+0,fffde2+100 */
        background: #e62d28; /* Old browsers */
        background: -moz-linear-gradient(45deg, #e62d28 0%, #fffde2 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #e62d28 0%,#fffde2 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #e62d28 0%,#fffde2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e62d28', endColorstr='#fffde2',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      }
  `]
})
export class SocialMediaComponent implements OnInit {
  // * TODO setup the routing service for this compnent //
  // private socialmedias: string;

  constructor() { }

  ngOnInit() {
    // this.socialmedias = ROUTES.filter(socialmedia => socialmedia.companyType === socialMediaCompany.ONLINE);

  }

}


const ROUTES = [
  { company: 'Facebook', id: '@smashradio1fm', icon: '../../assets/icons/socialmedia/facebook_clr.gif'},
  { company: 'Instagram', id: '@smashradio1fm', icon: '../../assets/icons/socialmedia/instagram_clr.gif'},
  { company: 'Twitter', id: '@smashradio1fm', icon: '../../assets/icons/socialmedia/twitter_clr.gif'},
  { company: 'Youtube', id: '@smashradio1fm', icon: '../../assets/icons/socialmedia/youtube_clr.gif'}

];
/*
enum socialMediaCompany {
  ONLINE
}

interface socialMediaData {
  company: string;
  id: string;
  icon: string;
  companyType: socialMediaCompany;
}
*/
