export default function handler(request, response) {
    if (request.method == 'POST') {
        return response.status(200).json('처리완료')
    } else {
        return response.status(500).json('처리완료')
    }
}