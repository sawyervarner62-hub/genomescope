"use client";

import { Finding, ClinicalContextEntry } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CLINICAL_CONTEXT } from "@/lib/clinical-context";
import { PATHWAYS } from "@/lib/pathways";

interface FindingDetailProps {
  finding: Finding;
}

export function FindingDetail({ finding }: FindingDetailProps) {
  const context: ClinicalContextEntry | undefined =
    CLINICAL_CONTEXT[`${finding.gene}|${finding.status}`];
  const pathways = Object.entries(PATHWAYS)
    .filter(([, genes]) => genes.includes(finding.gene))
    .map(([name]) => name);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>
              {finding.gene}{" "}
              <span className="text-muted-foreground font-mono text-base">
                ({finding.rsid})
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {finding.category}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono">
              {finding.genotype}
            </Badge>
            {finding.magnitude >= 3 ? (
              <Badge variant="destructive">High Impact</Badge>
            ) : finding.magnitude === 2 ? (
              <Badge className="bg-yellow-600">Moderate</Badge>
            ) : finding.magnitude === 1 ? (
              <Badge className="bg-green-600">Low</Badge>
            ) : (
              <Badge variant="secondary">Info</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium text-sm">
            Status: {finding.status.replace(/_/g, " ")}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {finding.description}
          </p>
          {finding.note && (
            <p className="text-sm text-muted-foreground mt-1 italic">
              Note: {finding.note}
            </p>
          )}
        </div>

        {pathways.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {pathways.map((p) => (
              <Badge key={p} variant="outline" className="text-xs">
                {p}
              </Badge>
            ))}
          </div>
        )}

        {context && (
          <>
            <Separator />
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-1">Mechanism</h4>
                <p className="text-sm text-muted-foreground">
                  {context.mechanism}
                </p>
              </div>

              {context.implications.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-1">Implications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {context.implications.map((imp, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-muted-foreground/60">{"\u2022"}</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {context.actions.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-1">
                    Recommended Actions
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {context.actions.map((action, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-muted-foreground/60">{"\u2022"}</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {context.interactions.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-1">
                    Gene Interactions
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {context.interactions.map((inter, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-muted-foreground/60">{"\u2022"}</span>
                        {inter}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
