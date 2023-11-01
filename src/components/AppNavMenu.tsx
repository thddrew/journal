import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import type { PostsGlob } from "@/types/posts";

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

export function AppNavMenu({ recentPosts }: { recentPosts: PostsGlob }) {
  return (
    <NavigationMenu className="mx-auto my-6 md:my-8 not-prose">
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
            <ul className="p-4 w-max max-w-xs space-y-3">
              {recentPosts.map((post) => (
                <li key={post.frontmatter.title}>
                  <NavMenuItem href={`/posts/${post.frontmatter.link}`}>
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundImage: `url(${post.frontmatter.image.url})`,
                        }}
                        className="bg-center bg-cover bg-no-repeat h-[60px] w-[60px]"
                      ></div>
                      {/* For accessibility and SEO? */}
                      <img
                        src={post.frontmatter.image.url}
                        className="hidden"
                        alt={post.frontmatter.image.alt}
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
