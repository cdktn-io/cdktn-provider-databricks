# `dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources databricks_knowledge_assistant_knowledge_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources(scope: Construct, id: string, config: DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources">knowledgeSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `knowledgeSources`<sup>Required</sup> <a name="knowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources"></a>

```typescript
public readonly knowledgeSources: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesConfig: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol">fileCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}. |

---

##### `fileCol`<sup>Required</sup> <a name="fileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol"></a>

```typescript
public readonly fileCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol">docUriCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol">textCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}. |

---

##### `docUriCol`<sup>Required</sup> <a name="docUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol"></a>

```typescript
public readonly docUriCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}.

---

##### `textCol`<sup>Required</sup> <a name="textCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol"></a>

```typescript
public readonly textCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig: dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput">fileColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol">fileCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileColInput`<sup>Optional</sup> <a name="fileColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput"></a>

```typescript
public readonly fileColInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `fileCol`<sup>Required</sup> <a name="fileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol"></a>

```typescript
public readonly fileCol: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput">docUriColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput">textColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol">docUriCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol">textCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docUriColInput`<sup>Optional</sup> <a name="docUriColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput"></a>

```typescript
public readonly docUriColInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `textColInput`<sup>Optional</sup> <a name="textColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput"></a>

```typescript
public readonly textColInput: string;
```

- *Type:* string

---

##### `docUriCol`<sup>Required</sup> <a name="docUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol"></a>

```typescript
public readonly docUriCol: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `textCol`<sup>Required</sup> <a name="textCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol"></a>

```typescript
public readonly textCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get"></a>

```typescript
public get(index: number): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>[]

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable">fileTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime">knowledgeCutoffTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files"></a>

```typescript
public readonly files: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a>

---

##### `fileTable`<sup>Required</sup> <a name="fileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable"></a>

```typescript
public readonly fileTable: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index"></a>

```typescript
public readonly index: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a>

---

##### `knowledgeCutoffTime`<sup>Required</sup> <a name="knowledgeCutoffTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime"></a>

```typescript
public readonly knowledgeCutoffTime: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSources } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---



