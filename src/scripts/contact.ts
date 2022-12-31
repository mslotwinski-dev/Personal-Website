import emailjs from 'emailjs-com'

// eslint-disable-next-line
export const mailApp = (e: any) => {
  emailjs
    .sendForm(
      'service_fsc7z1s',
      'template_o4685da',
      e.target,
      'user_p0k5jW3dTiblvpU5h4UvO'
    )
    .then(
      () => {
        const response: HTMLElement | null = document.querySelector('footer')
        const form: HTMLFormElement | null =
          document.querySelector('.contact-form')
        if (response) response.innerHTML = 'Email send ;>'
        if (form) form.reset()
      },
      (error) => {
        alert('FAILED...' + error)
      }
    )
}
