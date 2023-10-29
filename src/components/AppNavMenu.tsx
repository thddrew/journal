import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import Card from "./Card.astro";

const NavMenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <NavigationMenuLink
    className={cn(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    )}
    href={href}
  >
    {children}
  </NavigationMenuLink>
);

export function AppNavMenu({ recentPosts }) {
  return (
    <NavigationMenu className="mx-auto my-14 not-prose">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              "no-underline cursor-pointer text-inherit"
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={cn(
              navigationMenuTriggerStyle(),
              "no-underline cursor-pointer text-inherit"
            )}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 min-w-max space-y-3">
              {recentPosts.map((post) => (
                <li key={post.frontmatter.title}>
                  <NavMenuItem href={`/posts/${post.frontmatter.link}`}>
                    <div className="flex items-center gap-3">
                      <img
                        src={post.frontmatter.image.url}
                        className="object-cover shrink-0 h-[60px] w-[80px] rounded-md"
                      />
                      <p className="whitespace-nowrap">
                        {post.frontmatter.title}
                      </p>
                    </div>
                  </NavMenuItem>
                </li>
              ))}
              <li>
                <NavMenuItem href="/">All posts</NavMenuItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
