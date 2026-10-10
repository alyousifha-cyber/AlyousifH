# Media source register

This register documents the origin and release status of locally hosted third-party media.
It is a release gate: assets marked `VERIFY` must not be promoted to production until the
site owner confirms permission or they are replaced with owned/licensed alternatives.

## Medical images with reusable licensing

| Local asset | Source | Status |
| --- | --- | --- |
| `public/medical/knee-normal.webp` | Wikimedia Commons: X-ray of a normal knee by anteroposterior projection | Reusable; retain source attribution |
| `public/medical/knee-oa.webp` | Wikimedia Commons: Osteoarthritis on X-ray | Reusable; retain source attribution |
| `public/medical/hip-oa.webp` | Wikimedia Commons: Severe Tönnis grade 3 osteoarthritis of the hip | CC0/public-domain dedication |
| `public/medical/patellofemoral.webp` | Wikimedia Commons: Lateral patellofemoral angle | Reusable; retain source attribution |

## Homepage editorial images

The following files were cached from the URLs previously embedded in the site to remove
runtime hotlink failures. Their publication permission still requires confirmation or
replacement with owned/generated assets before production.

| Local asset | Original host | Release status |
| --- | --- | --- |
| `public/images/content/hip-rehab.webp` | University of Rzeszów | VERIFY |
| `public/images/content/pfps.webp` | Koru Movement | VERIFY |
| `public/images/content/acetabular.webp` | Baylor College of Medicine | VERIFY |
| `public/images/content/low-back.webp` | Anodyne | VERIFY |
| `public/images/content/tennis.webp` | CK Physio | VERIFY |
| `public/images/content/ganglion.webp` | CloudFront-hosted medical article | VERIFY |
| `public/images/content/plantar.webp` | Pulsaar | VERIFY |

## Locally hosted video

| Local asset | Original source | Release status |
| --- | --- | --- |
| `public/media/al-ekhbariya-orthopaedic-care.mp4` | Dr. Hussain Al-Yousif public TV appearance, previously served through LinkedIn | VERIFY broadcaster/site-use permission |
| `public/media/saudi-tv-achievement.mp4` | Saudi TV coverage featuring Dr. Hussain Al-Yousif, previously served through LinkedIn | VERIFY broadcaster/site-use permission |

The corresponding poster frames are derived from the local videos and share the same status.
