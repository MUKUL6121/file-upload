export default function form() {
    return (
        <>
            <h2>Upload a File</h2>
            <br />
            <form id="upload Form" action="http://localhost:3000/upload" class="border border-1 border-black p-3" method="post" enctype="multipart/form-data">
                <input type="file" name="samplefile" required multiple />
                <button type="submit">Upload</button>
            </form>
        </>
    )
}