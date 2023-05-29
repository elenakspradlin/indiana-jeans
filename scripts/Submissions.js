export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Get the submissions from your API


    // Iterate the submissions and create some <section> representations
    let submissionHTML = ""
    for (const submission of submissions) {
        submissionHTML += `<section class="submission">
        
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area Type of Foreign Key? ${submission.socioLocationId}</div>
        </section>`

    }

    // Return the HTML string

    return submissionHTML
}