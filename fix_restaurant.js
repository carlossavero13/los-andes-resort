const fs = require('fs'); const file = 'src/components/sections/Restaurant.tsx'; let code = fs.readFileSync(file, 'utf8'); const startMarker = '{/* Menu Buttons */}'; const endMarker = '</AnimatedSection>'; const startIndex = code.indexOf(startMarker); const endIndex = code.indexOf(endMarker, startIndex); if (startIndex !== -1 && endIndex !== -1) { const newButtons = {\/* Menu Button *\/}
              <div className=\"flex w-full\">
                <a 
                  href=\"https://drive.google.com/file/d/1ApHDA3qOftxPXYqJy78eSnOQCCFBl7_R/view\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"bg-[#722F37] rounded-xl sm:rounded-2xl px-8 py-4 flex items-center justify-center gap-3 text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg w-full sm:w-auto\"
                >
                  <UtensilsCrossed className=\"w-5 h-5 sm:w-6 sm:h-6\" strokeWidth={2} />
                  <span className=\"font-inter font-medium text-base sm:text-lg\">Ver Carta Completa</span>
                </a>
              </div>
            ; code = code.substring(0, startIndex) + newButtons + code.substring(endIndex); fs.writeFileSync(file, code); console.log('Replaced successfully!'); } else { console.log('Markers not found'); }
