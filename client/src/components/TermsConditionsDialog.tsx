import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsConditionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsConditionsDialog({ open, onOpenChange }: TermsConditionsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]" data-testid="dialog-terms-conditions">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Use</DialogTitle>
          <DialogDescription>
            CC and C Solutions Pty Ltd Website Terms of Use
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <p className="mb-4">
                This is an agreement between you and CC AND C SOLUTIONS PTY LIMITED (CC&C). By accessing, or using this website, you acknowledge that you have read, understand, and agree to be bound by the terms in this agreement and to comply with all applicable laws and regulations. If you do not agree, do not use this website.
              </p>
              <p className="mb-4">
                Your failure to comply with these Terms of Use will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">Rights and Usage</h3>
              <p className="mb-4">
                CC&C grants you a non-exclusive, non-transferable, limited permission to access and display the web pages within this site as a customer or potential customer of CC&C provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact.
              </p>
              <p className="mb-4">
                The use authorized under this agreement is non-commercial. You may not sell the content you access on or through this website. All other use of this site is prohibited.
              </p>
              <p className="mb-4">
                CC&C does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another website or in other media. Any content made available for downloading, access, or other use from this site with its own license or copyright terms will be governed by such terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">Confidential Information</h3>
              <p className="mb-4">
                CC&C does not want to receive confidential or proprietary information from you through our website.
              </p>
              <p className="mb-4">
                Any information or material you send to CC&C will be deemed NOT to be confidential. By sending CC&C any information or material, you grant CC&C an unrestricted, irrevocable license to copy, reproduce, publish, upload, post, transmit, distribute, publicly display, perform, modify, create derivative works from, and otherwise freely use, those materials or information. You also agree that CC&C is free to use any ideas, concepts, know-how, or techniques that you send us for any purpose.
              </p>
              <p className="mb-4">
                Personally identifiable information that you submit to CC&C will be handled in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">Third Parties</h3>
              <p className="mb-4">
                This website may provide links or references to non-CC&C websites and resources. CC&C makes no representations, warranties, or other commitments or endorsements whatsoever about any non-CC&C websites or third-party resources that may be referenced, accessible from, or linked to any CC&C site.
              </p>
              <p className="mb-4">
                CC&C is not a party to or responsible for any transactions you may enter into with third parties even if you learn of such parties or use a link to such parties from a CC&C site. Any non-CC&C website, even if it contains a CC&C logo, is independent from CC&C and CC&C does not control or take responsibility for the content on that website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">Disclaimer</h3>
              <p className="mb-4">
                CC&C may without notice at any time revise these Terms of Use and any other information contained in this website. CC&C may make improvements or changes in the products, services, or programs described in this site at any time without notice.
              </p>
              <p className="mb-4">
                From time to time this website may contain inaccuracies or typographical errors, and we do not warrant the accuracy of any posted information.
              </p>
              <p className="mb-4">
                Not all products, programs, services or other offerings described on this website are available in all geographies. Please refer to your regional CC&C affiliate for information about which CC&C offerings are available in your area.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">DISCLAIMER OF WARRANTY</h3>
              <p className="mb-4 uppercase text-xs leading-relaxed">
                USE OF THIS SITE IS AT YOUR SOLE RISK. ALL MATERIALS, INFORMATION, PRODUCTS, SOFTWARE, PROGRAMS, AND SERVICES ARE PROVIDED "AS IS," WITH NO WARRANTIES OR GUARANTEES WHATSOEVER. CC&C EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES, GUARANTEES, OR REPRESENTATIONS, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY AND INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITATION, CC&C MAKES NO WARRANTY OR GUARANTEE THAT THIS WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
              </p>
              <p className="mb-4 uppercase text-xs leading-relaxed">
                YOU UNDERSTAND AND AGREE THAT IF YOU DOWNLOAD OR OTHERWISE OBTAIN MATERIALS, INFORMATION, PRODUCTS, SOFTWARE, PROGRAMS, OR SERVICES FROM THIS WEBSITE, YOU DO SO AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES THAT MAY RESULT, INCLUDING LOSS OF DATA OR DAMAGE TO YOUR COMPUTER SYSTEM. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">LIMITATION OF LIABILITY</h3>
              <p className="mb-4 uppercase text-xs leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL CC&C BE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY TYPE WHATSOEVER RELATED TO OR ARISING FROM THIS WEBSITE OR ANY USE OF THIS WEBSITE, OR OF ANY SITE OR RESOURCE LINKED TO, REFERENCED, OR ACCESSED THROUGH THIS WEBSITE, OR FOR THE USE OR DOWNLOADING OF, OR ACCESS TO, ANY MATERIALS, INFORMATION, PRODUCTS, OR SERVICES, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, LOST SAVINGS OR LOSS OF PROGRAMS OR OTHER DATA, EVEN IF CC&C IS EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS EXCLUSION AND WAIVER OF LIABILITY APPLIES TO ALL CAUSES OF ACTION, WHETHER BASED ON CONTRACT, WARRANTY, TORT, OR ANY OTHER LEGAL THEORIES.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
