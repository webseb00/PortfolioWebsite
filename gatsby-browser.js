/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onPreRouteUpdate = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);

    // document.querySelector('.side_1').style.transform = "translateY(-130%)";
    // document.querySelector('.side_2').style.transform = "translateY(100%)";
    document.querySelector(".wrapper").style.opacity = "1"
  }, 1000)
}