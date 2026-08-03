# `dataDatabricksPostgresProjects` Submodule <a name="`dataDatabricksPostgresProjects` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProjects <a name="DataDatabricksPostgresProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects databricks_postgres_projects}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjects(scope: Construct, id: string, config?: DataDatabricksPostgresProjectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig">DataDatabricksPostgresProjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig">DataDatabricksPostgresProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted">resetShowDeleted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresProjectsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetShowDeleted` <a name="resetShowDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted"></a>

```typescript
public resetShowDeleted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresProjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresProjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects">projects</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput">showDeletedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted">showDeleted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects"></a>

```typescript
public readonly projects: DataDatabricksPostgresProjectsProjectsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresProjectsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---

##### `showDeletedInput`<sup>Optional</sup> <a name="showDeletedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput"></a>

```typescript
public readonly showDeletedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `showDeleted`<sup>Required</sup> <a name="showDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted"></a>

```typescript
public readonly showDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectsConfig <a name="DataDatabricksPostgresProjectsConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsConfig: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted">showDeleted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

##### `showDeleted`<sup>Optional</sup> <a name="showDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted"></a>

```typescript
public readonly showDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}.

---

### DataDatabricksPostgresProjectsProjects <a name="DataDatabricksPostgresProjectsProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjects: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectsProjectsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

### DataDatabricksPostgresProjectsProjectsInitialBranchSpec <a name="DataDatabricksPostgresProjectsProjectsInitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsInitialBranchSpec: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#is_protected DataDatabricksPostgresProjects#is_protected}. |

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#is_protected DataDatabricksPostgresProjects#is_protected}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpec <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsInitialEndpointSpec: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectsProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsProviderConfig: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

### DataDatabricksPostgresProjectsProjectsSpec <a name="DataDatabricksPostgresProjectsProjectsSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsSpec: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags">customTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion">pgVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags"></a>

```typescript
public readonly customTags: IResolvable | DataDatabricksPostgresProjectsProjectsSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}.

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}.

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}.

---

##### `enablePgNativeLogin`<sup>Optional</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}.

---

##### `historyRetentionDuration`<sup>Optional</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}.

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}.

---

### DataDatabricksPostgresProjectsProjectsSpecCustomTags <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsSpecCustomTags: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProjectsStatus <a name="DataDatabricksPostgresProjectsProjectsStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsStatus: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus = { ... }
```


### DataDatabricksPostgresProjectsProjectsStatusCustomTags <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsStatusCustomTags: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectsProviderConfig: dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resetIsProtected"></a>

```typescript
public resetIsProtected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec">DataDatabricksPostgresProjectsProjectsInitialBranchSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtectedInput"></a>

```typescript
public readonly isProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsInitialBranchSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec">DataDatabricksPostgresProjectsProjectsInitialBranchSpec</a>

---


### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```typescript
public resetEnableReadableSecondaries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```typescript
public readonly enableReadableSecondariesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---


### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup"></a>

```typescript
public putGroup(value: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput">groupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a>

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsInitialEndpointSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectsProjectsList <a name="DataDatabricksPostgresProjectsProjectsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresProjectsProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>[]

---


### DataDatabricksPostgresProjectsProjectsOutputReference <a name="DataDatabricksPostgresProjectsProjectsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresProjectsProjectsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialBranchSpec">initialBranchSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `initialBranchSpec`<sup>Required</sup> <a name="initialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialBranchSpec"></a>

```typescript
public readonly initialBranchSpec: DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference</a>

---

##### `initialEndpointSpec`<sup>Required</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec"></a>

```typescript
public readonly initialEndpointSpec: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a>

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresProjectsProjectsSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresProjectsProjectsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresProjectsProjectsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjects;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>

---


### DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsSpecCustomTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>

---


### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectsProjectsSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin">resetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration">resetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion">resetPgVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags"></a>

```typescript
public putCustomTags(value: IResolvable | DataDatabricksPostgresProjectsProjectsSpecCustomTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]

---

##### `putDefaultEndpointSettings` <a name="putDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings"></a>

```typescript
public putDefaultEndpointSettings(value: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch"></a>

```typescript
public resetDefaultBranch(): void
```

##### `resetDefaultEndpointSettings` <a name="resetDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings"></a>

```typescript
public resetDefaultEndpointSettings(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnablePgNativeLogin` <a name="resetEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin"></a>

```typescript
public resetEnablePgNativeLogin(): void
```

##### `resetHistoryRetentionDuration` <a name="resetHistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration"></a>

```typescript
public resetHistoryRetentionDuration(): void
```

##### `resetPgVersion` <a name="resetPgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion"></a>

```typescript
public resetPgVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput">defaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput">enablePgNativeLoginInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput">historyRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput">pgVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion">pgVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksPostgresProjectsProjectsSpecCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a>

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: IResolvable | DataDatabricksPostgresProjectsProjectsSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>[]

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput"></a>

```typescript
public readonly defaultBranchInput: string;
```

- *Type:* string

---

##### `defaultEndpointSettingsInput`<sup>Optional</sup> <a name="defaultEndpointSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```typescript
public readonly defaultEndpointSettingsInput: IResolvable | DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablePgNativeLoginInput`<sup>Optional</sup> <a name="enablePgNativeLoginInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput"></a>

```typescript
public readonly enablePgNativeLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `historyRetentionDurationInput`<sup>Optional</sup> <a name="historyRetentionDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput"></a>

```typescript
public readonly historyRetentionDurationInput: string;
```

- *Type:* string

---

##### `pgVersionInput`<sup>Optional</sup> <a name="pgVersionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput"></a>

```typescript
public readonly pgVersionInput: number;
```

- *Type:* number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a>

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProjectsStatusCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>[]

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsStatusCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>

---


### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectsProjectsStatusOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes">branchLogicalSizeLimitBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.computeLastActiveTime">computeLastActiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion">pgVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes">syntheticStorageSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchLogicalSizeLimitBytes`<sup>Required</sup> <a name="branchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```typescript
public readonly branchLogicalSizeLimitBytes: number;
```

- *Type:* number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `computeLastActiveTime`<sup>Required</sup> <a name="computeLastActiveTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.computeLastActiveTime"></a>

```typescript
public readonly computeLastActiveTime: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksPostgresProjectsProjectsStatusCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a>

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `syntheticStorageSizeBytes`<sup>Required</sup> <a name="syntheticStorageSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```typescript
public readonly syntheticStorageSizeBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectsProjectsStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a>

---


### DataDatabricksPostgresProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProjects } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---



