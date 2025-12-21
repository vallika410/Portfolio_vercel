export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pravallika Annapareddy. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/pravalli797"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vallika410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:pravallika.jbm@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
