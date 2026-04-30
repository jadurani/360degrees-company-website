# Issues & Decisions

A record of problems encountered during development and ongoing support of the 360 Degrees Systems Corporation website, along with the decisions made in response.

---

## Issue 1 — Cannot deploy to 360degrees.com.ph

### What happened

The website could not be deployed to `360degrees.com.ph`. Investigating the DNS records revealed mismatched IP addresses across the domain and its subdomains.

| Protocol | Domain | IP Address (when pinged) | Remarks |
| --- | --- | --- | --- |
|  | http://360degrees.com.ph/ | 185.230.62.177 |  |
| http | http://360degrees.com.ph/ | 45.79.222.138 | Questionable. ping http://360degrees.com.ph should not have worked |
| https | https://360degrees.com.ph/ | 45.79.222.138 | Questionable. ping http://360degrees.com.ph should not have worked |
|  | http://cpanel.360degrees.com.ph/ | 182.18.209.197 | The website I'm testing to deploy via cpanel gets deployed in 182.18.209.197 instead of http://360degrees.com.ph/ |
| http | http://cpanel.360degrees.com.ph/ | N/A |  |
| https | http://cpanel.360degrees.com.ph/ | N/A |  |
|  | http://360degreessystemscorporation.com/ | 185.230.63.171 |  |
| http | http://360degreessystemscorporation.com/ | N/A |  |
| https | http://360degreessystemscorporation.com/ | N/A |  |

dotPH support confirmed there were issues with how the domain records were set in the nameserver. The nameservers in use at the time were `ns1.skybb.ph` and `ns2.skybb.ph` — not the default dotPH nameservers. This meant that even a domain ownership transfer would not have resolved the problem; access to the skybb nameserver would also have been needed to fix the records.

The Atlantis team confirmed they only had access to the domain itself and not the nameservers. When or how the nameservers were changed could not be traced.

### Decision

Switching to self-owned domain, hosting, and email carried more risk and cost than the current setup — it would also have required backing up all existing cPanel emails and accepting some downtime. The decision was to retain the existing cPanel and Wix subscriptions and deploy the revamped website to `360degreessystemscorporation.com` instead.

---

## Issue 2 — Limited deployment facility in cPanel

### What happened

The existing cPanel plan did not support deploying a custom Node.js application, which is what the revamped website runs on.

### Decision

Deploy the revamped website via Vercel (free tier), connected to the GitHub repository. Vercel handles hosting and automatic deployment whenever changes are pushed to the repository. The live site is at [https://www.360degreessystemscorporation.com/](https://www.360degreessystemscorporation.com/).

---

## Issue 3 — DNS records changed; old Wix website displayed (March 2026)

### What happened

In March 2026, visitors to `360degreessystemscorporation.com` were served the old Wix website instead of the current one. The DNS records for the domain had been changed, causing traffic to route to Wix rather than Vercel where the current website is hosted.

The cause was not determined — the change may have been made inadvertently through the Wix admin panel, or by someone with access to the domain settings.

### Decision

DNS records were corrected to point back to Vercel. The domain for the current website is managed through Wix. Anyone with admin access to the Wix account can modify DNS settings — access should be limited to those who need it.

---

## Issue 4 — Website images disappeared

### What happened

At some point, all images hosted on cPanel became inaccessible. The cPanel file manager showed the images were gone. The exact cause is unknown — possibilities include a server migration that did not carry over the files, or manual deletion by someone with cPanel access.

### Decision

Rather than re-uploading images to cPanel or migrating to a cloud storage service, all images were moved into the GitHub repository itself (under `public/images/`). This means:

- Images are version-controlled and backed up automatically through GitHub
- No separate file storage account needs to be managed or paid for
- If the repository is intact, the images are intact

The trade-off is that the repository is larger, but for a website of this size that is not a concern.

Images are still delivered through [Imgix](https://imgix.com/) for optimized loading, but Imgix now reads from the repository files rather than from cPanel.
