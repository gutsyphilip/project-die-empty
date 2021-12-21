import type { NextApiRequest, NextApiResponse } from 'next'


interface ResponseData {
  message: string
}


// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }




// export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }