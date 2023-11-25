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
      "block transition-all select-none space-y-1 rounded-md p-3 leading-none hover:bg-slate-800/50 hover:text-accent-foreground hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg motion-reduce:transition-none group-hover:opacity-60 hover:!opacity-100"
    )}
    href={href}
  >
    {children}
  </NavigationMenuLink>
);

export function AppNavMenu({ recentPosts }: { recentPosts: PostsGlob }) {
  return (
    <NavigationMenu className="mx-auto py-6 md:py-8 not-prose">
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
            <ul className="p-3 min-w-[350px] w-max max-w-[100dvw] group">
              {recentPosts.map((post) => (
                <li key={post.frontmatter.title}>
                  <NavMenuItem href={`/posts/${post.frontmatter.link}`}>
                    <div className="flex items-center gap-3">
                      {/* <div
                        style={{
                          backgroundImage: `url(${post.frontmatter.image.url})`,
                        }}
                        className="bg-center bg-cover bg-no-repeat h-[60px] w-[60px] shrink-0"
                      ></div> */}
                      {/* For accessibility and SEO? */}
                      {/* <img
                        src={post.frontmatter.image.url}
                        className="hidden"
                        alt={post.frontmatter.image.alt}
                      /> */}
                      <div>
                        <p className="leading-tight">
                          {post.frontmatter.title}
                        </p>
                        <p>
                          <time
                            className="block text-sm text-muted-foreground"
                            dateTime={new Date(
                              post.frontmatter.pubDate
                            ).toISOString()}
                          >
                            {new Date(
                              post.frontmatter.pubDate
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </p>
                      </div>
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
