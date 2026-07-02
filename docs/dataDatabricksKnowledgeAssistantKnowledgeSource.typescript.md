# `dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSource <a name="DataDatabricksKnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource(scope: Construct, id: string, config: DataDatabricksKnowledgeAssistantKnowledgeSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable">fileTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">knowledgeCutoffTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files"></a>

```typescript
public readonly files: DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `fileTable`<sup>Required</sup> <a name="fileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```typescript
public readonly fileTable: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index"></a>

```typescript
public readonly index: DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `knowledgeCutoffTime`<sup>Required</sup> <a name="knowledgeCutoffTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```typescript
public readonly knowledgeCutoffTime: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourceConfig: dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourceFiles: dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourceFileTable: dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">fileCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `fileCol`<sup>Required</sup> <a name="fileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```typescript
public readonly fileCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourceIndex: dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">docUriCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol">textCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `docUriCol`<sup>Required</sup> <a name="docUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```typescript
public readonly docUriCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}.

---

##### `textCol`<sup>Required</sup> <a name="textCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```typescript
public readonly textCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig: dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourceFiles;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">fileColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">fileCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileColInput`<sup>Optional</sup> <a name="fileColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```typescript
public readonly fileColInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `fileCol`<sup>Required</sup> <a name="fileCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```typescript
public readonly fileCol: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">docUriColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">textColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">docUriCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">textCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docUriColInput`<sup>Optional</sup> <a name="docUriColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```typescript
public readonly docUriColInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `textColInput`<sup>Optional</sup> <a name="textColInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```typescript
public readonly textColInput: string;
```

- *Type:* string

---

##### `docUriCol`<sup>Required</sup> <a name="docUriCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```typescript
public readonly docUriCol: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `textCol`<sup>Required</sup> <a name="textCol" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```typescript
public readonly textCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantKnowledgeSourceIndex;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistantKnowledgeSource } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---



