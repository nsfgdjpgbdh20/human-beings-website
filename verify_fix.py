import sys
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Visit Japanese Home
        print("Visiting JP Home...")
        try:
            page.goto("http://localhost:3000/jp")
            page.wait_for_selector("h1")
        except Exception as e:
            print(f"Failed to load page: {e}")
            sys.exit(1)

        # Check for absence of eyebrow
        eyebrow_count = page.locator(".eyebrow").count()
        print(f"JP Eyebrow count: {eyebrow_count}")
        if eyebrow_count > 0:
            print("FAILURE: Eyebrows should be removed.")
            sys.exit(1)

        # Check for absence of subtitle
        content = page.content()
        if "Restore humanity’s white space" in content:
            print("FAILURE: Subtitle should be removed.")
            sys.exit(1)

        # Check Toggle
        # Toggle button is the one with text "JP" (since we are on JP page)
        # My code: <span ...>JP</span>
        # We look for a span with text "JP" inside a button
        toggle_text = page.locator("button").filter(has_text="JP")
        if toggle_text.count() > 0:
            print("SUCCESS: Toggle shows 'JP' on JP page.")
        else:
            # Fallback check just for text
            if page.get_by_text("JP", exact=True).is_visible():
                 print("SUCCESS: Toggle text 'JP' visible.")
            else:
                print("FAILURE: Toggle should show 'JP'.")
                sys.exit(1)

        # 2. Visit English Home
        print("Visiting EN Home...")
        page.goto("http://localhost:3000/en")
        page.wait_for_selector("h1")

        eyebrow_count = page.locator(".eyebrow").count()
        print(f"EN Eyebrow count: {eyebrow_count}")
        if eyebrow_count > 0:
            print("FAILURE: Eyebrows should be removed.")
            sys.exit(1)

        if "Restore humanity’s white space" in page.content():
             print("FAILURE: Subtitle should be removed.")
             sys.exit(1)

        # Check Toggle
        toggle_text = page.locator("button").filter(has_text="EN")
        if toggle_text.count() > 0:
            print("SUCCESS: Toggle shows 'EN' on EN page.")
        else:
            if page.get_by_text("EN", exact=True).is_visible():
                 print("SUCCESS: Toggle text 'EN' visible.")
            else:
                print("FAILURE: Toggle should show 'EN'.")
                sys.exit(1)

        print("All verification checks passed.")
        browser.close()

if __name__ == "__main__":
    run()
