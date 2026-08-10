# `dataDatabricksKnowledgeAssistants` Submodule <a name="`dataDatabricksKnowledgeAssistants` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants databricks_knowledge_assistants}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants(scope: Construct, id: string, config?: DataDatabricksKnowledgeAssistantsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig">DataDatabricksKnowledgeAssistantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig">DataDatabricksKnowledgeAssistantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksKnowledgeAssistantsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksKnowledgeAssistants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants">knowledgeAssistants</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `knowledgeAssistants`<sup>Required</sup> <a name="knowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants"></a>

```typescript
public readonly knowledgeAssistants: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksKnowledgeAssistantsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantsConfig <a name="DataDatabricksKnowledgeAssistantsConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantsConfig: dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantsKnowledgeAssistants: dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig: dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

### DataDatabricksKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

const dataDatabricksKnowledgeAssistantsProviderConfig: dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get"></a>

```typescript
public get(index: number): DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantsKnowledgeAssistants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>[]

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo">errorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo"></a>

```typescript
public readonly errorInfo: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksKnowledgeAssistantsKnowledgeAssistants;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---


### DataDatabricksKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksKnowledgeAssistants } from '@cdktn/provider-databricks'

new dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksKnowledgeAssistantsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---



