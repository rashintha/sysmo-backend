import { Router } from "express";
import si from 'systeminformation'

const router = Router()

router.get('/', async (req, res) => {
  const date = new Date()

  const cpu = await si.cpu()
  const os = await si.osInfo()

  res.json({
    cpu: `${cpu.manufacturer} ${cpu.brand} @ ${cpu.cores}x ${cpu.speedMax}GHz`,
    os: `${os.distro} ${os.build} ${os.arch} ${os.platform.toLocaleUpperCase()} ${os.kernel}`,
    timestamp: Date.now(),
    time: date.toISOString()
  })
})

export default router